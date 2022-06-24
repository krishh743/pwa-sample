const staticCache = "site-static-two";
const assets = [
  "/",
  "index.html",
  "app.js",
  "PwaTest.js",
  "style.css",
  "bundle.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  "manifest.json",
  "%PUBLIC_URL%/logo192.png",
  "%PUBLIC_URL%/favicon.ico",
  "https://mui.com/",
  // "Fetch⚙ manifest.json", 
  "favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log(caches.toString(), "cache is storing  in local system")
      cache.addAll(assets);
    })
  );
  console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
  // console.log("Service worker activated");
  event.waitUntil(caches.keys().then(keys=>{
return Promise.all(keys.filter(key => key !==staticCache).map(key => caches.delete(key)));
  }))
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachesResult) => {
      return cachesResult || fetch(event.request);
    })
  );
  console.log("Service worker fetching", event);
});

