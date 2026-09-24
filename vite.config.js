import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',            // simula o navegador (document, window...)
    include: ['tests/**/*.spec.js'], // onde ficam os testes
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,vue}'],
      exclude: ['src/main.js', 'src/App.vue']
    }
  }
})
