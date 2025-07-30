import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import lightningcss from 'vite-plugin-lightningcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lightningcss(),
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
  // Minify CSS - for CSS modules
  // css: {
  //   modules: {
  //     generateScopedName: '[hash:base64:5]', // shorter class names
  //   },
  // },
  // Enable better dev server performance
  server: {
    hmr: {
      overlay: false, // Disable overlay for better development experience
    },
  },
})
