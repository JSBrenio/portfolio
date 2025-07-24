import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    // Enable rollup optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          markdown: ['react-markdown', 'rehype-raw', 'rehype-sanitize'],
        },
      },
    },
    // Increase chunk size warning limit since this is expected for portfolios
    chunkSizeWarningLimit: 1000,
  },
  // Enable better dev server performance
  server: {
    hmr: {
      overlay: false, // Disable overlay for better development experience
    },
  },
})
