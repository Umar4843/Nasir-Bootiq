import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600, // Increases chunk warning limit (temporary fix)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'; // Separate React-related dependencies
            }
            return 'vendor'; // Separate other node_modules dependencies
          }
        },
      },
    },
  },
});
