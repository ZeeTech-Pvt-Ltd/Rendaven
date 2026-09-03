import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
