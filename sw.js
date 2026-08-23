const CACHE="fahrtenbuch-v25-force-refresh";
const ASSETS=["./","./index.html","./manifest.webmanifest","./splash_w204_v25.png"];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request,{cache:"no-store"})
        .then(response=>{
          const clone=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,clone));
          return response;
        })
        .catch(()=>caches.match(event.request).then(r=>r||caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    fetch(event.request,{cache:"no-store"})
      .then(response=>{
        const clone=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,clone));
        return response;
      })
      .catch(()=>caches.match(event.request))
  );
});
