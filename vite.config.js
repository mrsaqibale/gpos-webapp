import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/gpos-auth': {
        target: 'https://auth.gposapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gpos-auth/, ''),
      },
    },
  },
})
