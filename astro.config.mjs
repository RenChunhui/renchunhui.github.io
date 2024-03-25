import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://renchunhui.github.io',
  base: 'master',
  integrations: [
    tailwind({ applyBaseStyles: false })
  ]
});
