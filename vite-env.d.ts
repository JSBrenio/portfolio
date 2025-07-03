/// <reference types="vite/client" />

// Declare module for markdown imports via vite-plugin-raw
declare module '*.md' {
  const content: string;
  export default content;
}

// Declare module for raw text imports
declare module '*.md?raw' {
  const content: string;
  export default content;
}
