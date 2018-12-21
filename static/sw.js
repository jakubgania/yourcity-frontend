/* eslint-disable */

const staticCacheName = 'test-static-v5'

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        '/',
        '_nuxt/style.css',
        '_nuxt/vendor.bundle.js',
        '_nuxt/server-bundle.js',
        '_nuxt/nuxt.bundle.js',
        'https://fonts.googleapis.com/css?family=Raleway:400,600,700,800|Material+Icons'
      ])
    })
  )
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('test-') &&
                 cacheName !== staticCacheName
        }).map(function (cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
