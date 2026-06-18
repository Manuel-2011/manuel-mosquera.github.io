import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Set `site` and `base` for GitHub Pages project sites.
  // Update the path to match your repository name if different.
  site: 'https://manuel-mosquera.github.io/personal-website',
  base: '/personal-website/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
