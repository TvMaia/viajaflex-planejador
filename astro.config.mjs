import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://viajaflex.com.br',
  compressHTML: true,
  build: { assets: '_astro' },
});
