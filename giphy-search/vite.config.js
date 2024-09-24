import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PORT = 8080;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { //
      '/api': {
        target: `http://localhost:${PORT}`, //coming fro the samee url, since the front end and back end are getting the same url
        changeOrigin: true,
      },
    },
  },
});
