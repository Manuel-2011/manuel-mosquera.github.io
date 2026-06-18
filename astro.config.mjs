import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://manuel-2011.github.io',
  base: '/manuel-mosquera.github.io/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
