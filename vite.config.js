import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ship Preact's compatibility layer instead of React — same API,
    // much smaller runtime and faster first render (mobile perf).
    alias: [
      { find: 'react', replacement: 'preact/compat' },
      { find: 'react-dom', replacement: 'preact/compat' },
      { find: 'react-dom/client', replacement: 'preact/compat/client' },
      { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' },
    ],
  },
  server: {
    port: 5178, // 5173-5177 are occupied by other apps on this machine
  },
  build: {
    rollupOptions: {
      output: {
        // Split dependencies into a cached vendor chunk. intl-tel-input
        // stays in its own lazy chunk (loaded on demand via import()).
        manualChunks(id) {
          if (id.includes('node_modules') && !id.includes('intl-tel-input')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
