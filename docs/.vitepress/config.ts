import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: '../',
  srcExclude: ['**/node_modules/**', 'docs/**', 'CLAUDE.md'],
  rewrites: { 'README.md': 'index.md' },
  title: 'Agile Vibe Coding Manifesto',
  description:
    'Principles for building software systems that remain maintainable, transparent, and trustworthy when automated systems produce significant portions of the code.',
  themeConfig: {
    outline: false,
    nav: [],
    socialLinks: [],
    footer: {
      message: 'Released under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 License</a>.',
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
})
