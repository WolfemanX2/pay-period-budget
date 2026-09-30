// Minimal service worker — required by Chrome/Android to treat this as an
// installable standalone app (no address bar) rather than a plain shortcut.
// It doesn't cache anything; it just needs to exist and handle fetch.
self.addEventListener("install", function(e){
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  e.respondWith(fetch(e.request));
});
