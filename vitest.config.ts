import { defineConfig } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    deps: {
      inline: ["vuetify"],
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
      '#imports': '<rootDir>/.nuxt/imports.d.ts',
      '#app': '<rootDir>/.nuxt/imports.d.ts',
    },
  },
})
