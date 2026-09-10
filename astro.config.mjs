// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.leoneastroofing.co.uk',

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Utility pages are noindex, so keep them out of the sitemap too.
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms-and-conditions'),
    })
  ]
});
