import mdPlugin from 'vite-plugin-markdown'

module.exports = {
  plugins: [mdPlugin({ mode: 'html' })],
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
}
