import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // PERFORMANCE: Code splitting for route-based lazy loading
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('react-dom')) return 'react-vendors';
            if (id.includes('react-router')) return 'react-vendors';
            if (id.includes('react-icons')) return 'icons';
          }
          
          // Split route components for lazy loading
          if (id.includes('Certificate') || 
              id.includes('MyRoadMap') || 
              id.includes('MyNotes')) {
            return 'routes-lazy';
          }
          
          // Split heavy components
          if (id.includes('ProfileCard') || id.includes('LogoLoop')) {
            return 'components-heavy';
          }
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
