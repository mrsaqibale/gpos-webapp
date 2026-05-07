import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/gpos-auth': {
        target: 'https://auth.gposapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gpos-auth/, ''),
      },
    },
  },
})
