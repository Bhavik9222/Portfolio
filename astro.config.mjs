import { defineConfig } from 'astro/config';

// GitHub Pages config — EDIT THESE TWO VALUES:
// 1) site: your published URL, e.g. https://bhavik9222.github.io
// 2) base: '/<repo-name>' for a project site (e.g. /portfolio), or '/' for a user/site.
export default defineConfig({
  site: 'https://bhavik9222.github.io',
  base: '/portfolio',
  outDir: './dist',
});
