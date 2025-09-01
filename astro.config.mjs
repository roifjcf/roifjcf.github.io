// @ts-check
import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/util/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  
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
