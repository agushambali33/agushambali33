self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('airdrop-cache-v1').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/testnet.html',
      '/assets/logo.webp'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});