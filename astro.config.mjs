import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: 'static',
  site: 'https://arslanahmad.site',
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
