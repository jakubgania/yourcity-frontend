const pkg = require('./package');

const sitemapRoutes = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/countries/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/countries/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/countries/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/countries/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-11',
  },
  {
    url: '/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/en/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/pl/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-08',
  },
  {
    url: '/de/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2018-12-11',
  },
];

const generateRoutes = [
  '/',
  '/pl',
  '/en',
  '/de',
  'search',
  '/pl/search',
  '/en/search',
  '/de/search',
  '/countries/all',
  '/pl/countries/all',
  '/en/countries/all',
  '/de/countries/all',
  '/photos',
  '/pl/photos',
  '/en/photos',
  '/de/photos',
  '/photos/:id?',
  '/pl/photos/:id?',
  '/en/photos/:id?',
  '/de/photos/:id?',
  '/contact',
  '/pl/contact',
  '/en/contact',
  '/de/contact',
  '/changelog',
  '/pl/changelog',
  '/en/changelog',
  '/de/changelog',
  '/business',
  '/pl/business',
  '/en/business',
  '/de/business',
  '/example-profile',
  '/pl/example-profile',
  '/en/example-profile',
  '/de/example-profile',
  '/example-profile/photos',
  '/en/example-profile/photos',
  '/de/example-profile/photos',
  '/pl/example-profile/photos',
  '/project',
  '/pl/project',
  '/en/project',
  '/de/project',
  '/founder',
  '/pl/founder',
  '/en/founder',
  '/de/founder',
  '/agreements',
  '/pl/agreements',
  '/en/agreements',
  '/de/agreements',
];

module.exports = {
  // mode: 'spa',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Jakub Gania' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'cUuV3bKjY_wOCtCYYfn0xNwrPnqq25aTvcrXyVPEPrA' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,700,800|Material+Icons' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#252bfc' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    'aos/dist/aos.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/i18n.js',
    { src: '~/plugins/aos', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
  ],

  generate: {
    routes: generateRoutes,
  },

  router: {
    middleware: 'i18n',
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://yourcity.io',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    // exclude: [
    //   '/secret',
    //   '/admin/**'
    // ],
    routes: sitemapRoutes,
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['aos'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
