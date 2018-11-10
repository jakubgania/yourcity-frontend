const pkg = require('./package');

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
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/changelog',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/changelog',
    changefreq: 'weekly',
    priority: 0.5,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/en/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-06',
  },
  {
    url: '/pl/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2018-11-06',
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
  '/photos/:id',
  '/pl/photos/:id',
  '/en/photos/:id',
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
  //mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'LNwrNzoVyEwS7ueGJ5pG6ud_0P50su76BS88vouWYCw' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
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
