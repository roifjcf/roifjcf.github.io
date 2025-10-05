// @ts-check
import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/util/remark-modified-time.mjs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// https://docs.astro.build/en/guides/integrations-guide/sitemap/
export default defineConfig({
  site: 'https://roifjcf.github.io/', // required
  integrations: [sitemap({
    
  })],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker',
      // themes: {
      //   light: 'material-theme-lighter',
      //   dark: 'material-theme-darker',
      // },
    },
    remarkPlugins: [remarkModifiedTime],
  },
});
