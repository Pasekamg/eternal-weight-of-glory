// Install event
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            console.log('Opened cache');
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/image.png'
            ]);
        })
    );
});

// Fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
