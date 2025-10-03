import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
import vueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig({
  plugins: [vue(),tailwindcss(),vueDevTools()],
})
