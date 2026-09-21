import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://peaush07.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/portfolio/',
});
