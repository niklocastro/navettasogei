const CACHE_NAME = "miosito-cache-v1";
const OFFLINE_URLS = [
  "/navettasogei/",
  "/navettasogei/index.html",
  "/navettasogei/question.png",
  "/navettasogei/bus-icon-192.png",
  "/navettasogei/bus-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html'))
  );
});
