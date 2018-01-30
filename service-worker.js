var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'https://matt-breithaupt.github.io/index.html',
  'https://matt-breithaupt.github.io/CSS/main.css',
  'https://matt-breithaupt.github.io/JS/main_script.js',
  'https://res.cloudinary.com/dgoasjucg/image/upload/v1516203127/portfolio/favicon.ico'
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



self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
