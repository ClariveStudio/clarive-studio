import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clarivestudio.com',
  build: {
    format: 'file'
  },
  integrations: [],
  server: {
    host: true
  }
});