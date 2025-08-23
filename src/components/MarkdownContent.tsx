import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import LazyImage from './LazyImage';
import '../styles/Markdown.css';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = React.memo(({ content, className = "" }) => {  
  // Helper function to generate anchor IDs from heading text
  const generateId = (text: string | React.ReactNode): string => {
    const stringText = text?.toString() ?? '';
    return stringText
      .toLowerCase()
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/[^\w-]/g, '')      // Remove non-word characters except hyphens
      .replace(/--+/g, '-')        // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');      // Remove leading/trailing hyphens
  };

  // Custom sanitization schema that allows img tags and common attributes
  const sanitizeOptions = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames ?? []),
      'img'
    ],
    attributes: {
      ...defaultSchema.attributes,
      img: ['src', 'alt', 'width', 'height', 'style', 'className', 'class'],
      '*': ['className', 'class', 'style']
    }
  };

  // Transform image paths to handle both relative and absolute paths
  const transformedContent = content.replace(
    /src="\/public\//g, 
    'src="/'
  );

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, sanitizeOptions]
        ]}
        components={{
          // Custom heading components to generate anchor IDs
          h1: ({ children, ...props }) => {
            const id = generateId(children);
            return <h1 id={id} {...props}>{children}</h1>;
          },
          h2: ({ children, ...props }) => {
            const id = generateId(children);
            return <h2 id={id} {...props}>{children}</h2>;
          },
          h3: ({ children, ...props }) => {
            const id = generateId(children);
            return <h3 id={id} {...props}>{children}</h3>;
          },
          h4: ({ children, ...props }) => {
            const id = generateId(children);
            return <h4 id={id} {...props}>{children}</h4>;
          },
          h5: ({ children, ...props }) => {
            const id = generateId(children);
            return <h5 id={id} {...props}>{children}</h5>;
          },
          h6: ({ children, ...props }) => {
            const id = generateId(children);
            return <h6 id={id} {...props}>{children}</h6>;
          },
          // Custom image component to handle path transformations and lazy loading
          img: ({ src, alt, width, height, style, className, ...props }) => {
            // Transform paths starting with /public/ to just /
            const transformedSrc = src?.startsWith('/public/') 
              ? src.replace('/public/', '/') 
              : src;
          
            return (
              <LazyImage
                src={transformedSrc ?? ''}
                alt={alt ?? ''}
                className={`markdown-image ${className ?? ''}`}
                style={{
                  width: width,
                  height: height,
                  ...style
                }}
                onError={(event) => {
                  console.warn(`Failed to load image: ${transformedSrc}`);
                  // Optional: Set a fallback image
                  (event.currentTarget as HTMLImageElement).src = '/plz.png';
                }}
                {...props}
              />
            );
          },
          // Custom link component to open external links in a new tab, keep internal anchors in same page
          a: ({ href, children, ...props }) => {
            // Check if it's an internal anchor link (starts with #)
            const isInternalAnchor = href?.startsWith('#');
            
            // Handle smooth scrolling for internal anchors
            const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
              if (isInternalAnchor && href) {
                event.preventDefault();
                const targetId = href.substring(1); // Remove the # from href
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                  targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' // This works with scroll-margin-top CSS
                  });
                }
              }
            };
            
            return (
              <a
                href={href}
                target={isInternalAnchor ? undefined : "_blank"}
                rel={isInternalAnchor ? undefined : "noopener noreferrer"}
                onClick={handleAnchorClick}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {transformedContent}
      </ReactMarkdown>
    </div>
  );
});

MarkdownContent.displayName = 'MarkdownContent';

export default MarkdownContent;
