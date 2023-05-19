import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./rest-countries-api-with-color-theme-switcher/dist/",
  },
  plugins: [react()],
});
