self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('airdrop-cache').then((cache) => cache.addAll([
      '/',
      '/index.html',
      'https://i.postimg.cc/wMq4pR9z/Picsart-25-08-23-04-57-59-050.png' // Cache logo
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});