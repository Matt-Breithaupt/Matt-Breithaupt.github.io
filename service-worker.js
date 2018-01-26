var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'https://matt-breithaupt.github.io/index.html',
  'https://matt-breithaupt.github.io/CSS/main.css',
  'https://matt-breithaupt.github.io/JS/main_script.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
