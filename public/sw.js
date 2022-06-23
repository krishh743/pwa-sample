const staticCache='site-static'
const assets = [
    '/',
    'index.html',
    'app.js',
    'PwaTest.js',
    'style.css',

]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(staticCache).then(cache =>{
            console.log(caches.toString(),"cache is storing  in local system"); 
            cache.addAll(assets)
        })
    )
    console.log("Service worker installed");
  });
  self.addEventListener("activate", event => {
    console.log("Service worker activated");
  });   
  


  self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachesResult => {
            return cachesResult || fetch(event.request, event.response);
        })
    )
  console.log("Service worker fetching",event);
  })