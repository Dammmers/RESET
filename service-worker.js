self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open("reset").then(cache =>
      cache.match(event.request).then(resp =>
        resp || fetch(event.request).then(res => {
          cache.put(event.request, res.clone());
          return res;
        })
      )
    )
  );
});
