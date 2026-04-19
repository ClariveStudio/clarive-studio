import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clarivestudio.com',
  build: {
    format: 'file',
    assets: 'assets'
  },
  integrations: [],
  server: {
    host: true
  }
});