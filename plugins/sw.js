/* eslint-disable */

if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.onNuxtReady((app) => {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        if (!navigator.serviceWorker.controller) {
          return
        }

        if (reg.waiting) {
          _updateReady(reg.waiting)
          return
        }

        if (reg.installing) {
          _trackInstalling(reg.installing)
          return
        }

        reg.addEventListener('updatefound', function () {
          _trackInstalling(reg.installing)
        })
      })

      var refreshing
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return
        window.location.reload()
        refreshing = true
      })
    })
  }
}

function _updateReady (worker) {
  console.debug('Update available')
  worker.postMessage({action: 'skipWaiting'})
}

function _trackInstalling (worker) {
  worker.addEventListener('statechange', function () {
    if (worker.state === 'installed') {
      _updateReady(worker)
    }
  })
}
