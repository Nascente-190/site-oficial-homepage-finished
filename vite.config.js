import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,    // Abre o navegador automaticamente
    port: 5173,    // Porta fixa para desenvolvimento
    host: true,    // Permite acesso externo
  },
  build: {
    minify: true,           // Minifica o código em produção
    sourcemap: true,        // Gera sourcemaps para debugging
    chunkSizeWarningLimit: 1000,  // Limite para aviso de tamanho de chunk
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  }
})