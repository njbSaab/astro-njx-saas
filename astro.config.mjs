// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-njx-saas.pages.dev',
  integrations: [alpinejs()],
});
