import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Set BASE_PATH env (e.g., "/<repo-name>/") for GitHub Pages project sites
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
})
