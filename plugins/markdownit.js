import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  })

  md.use(require('markdown-it-footnote'))

  md.renderer.rules.footnote_block_open = () => (
    '<hr class="footnotes-sep">\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list" start="1">\n'
    // Start attribute is here to avoid MS Edge Android bug
  )

  inject('md', md)
}
