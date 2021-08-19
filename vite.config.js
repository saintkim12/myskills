import mdPlugin from 'vite-plugin-markdown'

module.exports = {
  plugins: [mdPlugin({ mode: 'html' })],
  base: '/myskills/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  }
}
