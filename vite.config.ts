import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // Cloud Run compatibility: use PORT env var or default to 3000 for local dev
  const port = parseInt(process.env.PORT || '3000', 10);
  
  return {
    server: {
      port: port,
      host: '0.0.0.0', // Required for Cloud Run
    },
    preview: {
      port: port,
      host: '0.0.0.0', // Required for Cloud Run
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
