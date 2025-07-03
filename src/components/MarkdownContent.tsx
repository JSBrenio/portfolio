import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { useTheme } from '../hooks/useTheme';
import '../styles/Markdown.css';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = "" }) => {
  const { theme } = useTheme();
  
  // Custom sanitization schema that allows img tags and common attributes
  const sanitizeOptions = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
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
    <div className={`markdown-content ${theme} ${className}`}>
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, sanitizeOptions]
        ]}
        components={{
          // Custom image component to handle path transformations
          img: ({ src, alt, width, height, style, className, ...props }) => {
            // Transform paths starting with /public/ to just /
            const transformedSrc = src?.startsWith('/public/') 
              ? src.replace('/public/', '/') 
              : src;
            
            return (
              <img
                src={transformedSrc}
                alt={alt}
                width={width}
                height={height}
                style={style}
                className={className}
                {...props}                onError={() => {
                  console.warn(`Failed to load image: ${transformedSrc}`);
                  // Optional: Set a fallback image
                  // target.src = '/fallback-image.png';
                }}
              />
            );
          }
        }}
      >
        {transformedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
