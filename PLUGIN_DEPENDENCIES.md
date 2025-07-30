# Plugin Dependencies Explanation

## Required Packages

### Core Dependencies
- **`react-markdown`** - Main markdown rendering library
- **`rehype-raw`** - Allows HTML tags in markdown content
- **`rehype-sanitize`** - Secures HTML content to prevent XSS

### NOT Required
- ~~`vite-plugin-raw`~~ - **REMOVED** - Vite's built-in `?raw` query does this

## How It Works

### 1. Import Process
```typescript
// This uses Vite's built-in ?raw query (no plugin needed)
import markdownContent from './file.md?raw';
```

### 2. Rendering Process
```typescript
// ReactMarkdown with rehype plugins
<ReactMarkdown
  rehypePlugins={[
    rehypeRaw,        // Enables HTML tags like <img>
    [rehypeSanitize, options] // Secures the HTML content
  ]}
>
  {markdownContent}
</ReactMarkdown>
```

## Why Each Plugin Is Needed

### `rehype-raw`
- **Purpose**: Allows HTML tags to be processed in markdown
- **Without it**: `<img src="...">` would be rendered as plain text
- **With it**: HTML tags are properly parsed and rendered

### `rehype-sanitize`
- **Purpose**: Security - prevents XSS attacks
- **Without it**: Malicious HTML could be executed
- **With it**: Only safe HTML tags and attributes are allowed

### `?raw` Query (Built into Vite)
- **Purpose**: Imports file content as a string instead of a URL
- **Without it**: Import would be a file path like `/src/file.md?t=123456`
- **With it**: Import is the actual markdown content as text

## Minimal Required Setup

```json
{
  "dependencies": {
    "react-markdown": "^10.1.0",
    "rehype-raw": "^7.0.0",
    "rehype-sanitize": "^6.0.0"
  }
}
```

```typescript
// vite-env.d.ts
declare module '*.md?raw' {
  const content: string;
  export default content;
}
```

```typescript
// Import
import content from './file.md?raw';

// Render
<ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
  {content}
</ReactMarkdown>
```

That's it! No additional Vite configuration or plugins needed.
