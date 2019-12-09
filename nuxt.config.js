const baseHref = process.env.BASE_HREF || '/';
const ionicVersion = require('./package.json').dependencies['@ionic/core'];
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/@ionic/core@4.11.5/css/ionic.bundle.css' },
      // // see css block...
    ],
    script: [
      { type: 'module', src: `https://cdn.jsdelivr.net/npm/@ionic/core@${ionicVersion}/dist/ionic/ionic.esm.js` },
      { nomodule: '', src: `https://cdn.jsdelivr.net/npm/@ionic/core@${ionicVersion}/dist/ionic/ionic.js` },
    ],
  },
  router: {
    base: baseHref,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // '@/layouts/global.css',
    //
    '../node_modules/@ionic/core/css/core.css',
    //
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    //
    '../node_modules/@ionic/core/css/ionic.bundle.css',
    //
    // '../node_modules/@ionic/core/css/padding.css',
    // '../node_modules/@ionic/core/css/float-elements.css',
    // '../node_modules/@ionic/core/css/text-alignment.css',
    // '../node_modules/@ionic/core/css/text-transformation.css',
    // '../node_modules/@ionic/core/css/flex-utils.css',
    // '../node_modules/@ionic/core/css/display.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { ssr: false, src: '~plugins/main' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    indicator: true,
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
