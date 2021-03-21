export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Penguinone',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og_site_name', property: 'og:site_name', content: 'Penguinone' },
      { hid: 'og_title', property: 'og:title', content: 'Penguinone' },
      { hid: 'og_url', property: 'og:url', content: 'https://penguinone.kuropen.org/' },
      { hid: 'og_image', property: 'og:image', content: 'https://penguinone.kuropen.org/siteImages/penguin.png' },
      { hid: 'og_type', property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/siteImages/penguin.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/css/orbitron.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/css/tooltip.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/tooltip.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],

  serverMiddleware: [
    '~/middleware/cache-control'
  ],

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      'markdown-it-footnote'
    ]
  },

  axios: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
