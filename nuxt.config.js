const pkg = require('./package');

const favicon = 'data:image/png;base64,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';

const sitemapRoutes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl',
    changefreq: 'weekly',
    priority: 1,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en',
    changefreq: 'weekly',
    priority: 1,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/cities/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/cities/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/cities/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/contact',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/contact',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/contact',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/changelog',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/en/changelog',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/pl/changelog',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/en/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/pl/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-21',
  },
  {
    url: '/example-profile',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/example-profile',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/example-profile',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/example-profile/photos',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-22',
  },
  {
    url: '/en/example-profile/photos',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-22',
  },
  {
    url: '/pl/example-profile/photos',
    changefreq: 'weekly',
    priority: 0.6,
    lastmodISO: '2018-11-22',
  },
  {
    url: '/project',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/project',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/project',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/founder',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/founder',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/founder',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/agreements',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/agreements',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/agreements',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
];

const generateRoutes = [
  '/',
  '/pl',
  '/en',
  'search',
  '/pl/search',
  '/en/search',
  '/cities/all',
  '/pl/cities/all',
  '/en/cities/all',
  '/photos',
  '/pl/photos',
  '/en/photos',
  '/photos/:id?',
  '/pl/photos/:id?',
  '/en/photos/:id?',
  '/contact',
  '/pl/contact',
  '/en/contact',
  '/changelog',
  '/pl/changelog',
  '/en/changelog',
  '/business',
  '/pl/business',
  '/en/business',
  '/example-profile',
  '/pl/example-profile',
  '/en/example-profile',
  '/example-profile/photos',
  '/en/example-profile/photos',
  '/pl/example-profile/photos',
  '/project',
  '/pl/project',
  '/en/project',
  '/founder',
  '/pl/founder',
  '/en/founder',
  '/agreements',
  '/pl/agreements',
  '/en/agreements',
];

module.exports = {
  mode: 'spa',
  // mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'cUuV3bKjY_wOCtCYYfn0xNwrPnqq25aTvcrXyVPEPrA' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: favicon },
      { rel: 'shortcut icon', type: 'image/png', href: favicon },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,700,800' },
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
