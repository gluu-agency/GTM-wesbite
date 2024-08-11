import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1'
  },
  define: {
    global: {},
  },
  plugins: [react()],
  resolve: {
    alias: {
      "~@fontsource/ibm-plex-mono": "@fontsource/ibm-plex-mono",
      "~@fontsource/inter": "@fontsource/inter",
      jsbi: resolve(__dirname, '.', 'node_modules', 'jsbi', 'dist', 'jsbi-cjs.js'),
    },

  },
})
