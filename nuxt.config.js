const pkg = require('./package');

const sitemapRoutes = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/search',
    changefreq: 'always',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/countries/all',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/countries/a20',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/countries/a20',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/countries/a20',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/photos',
    changefreq: 'daily',
    priority: 0.8,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/contact',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/changelog',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/business',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/example-profile',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/example-profile/photos',
    changefreq: 'daily',
    priority: 0.6,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/project',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/founder',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/en/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/pl/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
  },
  {
    url: '/de/agreements',
    changefreq: 'daily',
    priority: 0.5,
    lastmodISO: '2019-01-10',
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
  cache: true,
  mode: 'universal',

  manifest: {
    lang: 'en',
    name: 'Yourcity - Search for different places in cities and locations',
    description: 'Information about your city and the area where you are. Search for information in various categories in different countries. Yourcity is a constantly growing platform.',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#252bfc',
    background_color: '#252bfc',
  },

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
      {
        rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32',
      },
      {
        rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16',
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons',
      },
    ],
  },

  loading: { color: '#252bfc' },

  css: [
    '~/assets/style/app.styl',
    '~/assets/scss/fonts.scss',
    'aos/dist/aos.css',
  ],

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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
  ],

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

  build: {
    vendor: ['aos'],

    extend(config, ctx) {
      Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          // test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
