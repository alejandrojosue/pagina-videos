;
//asignar un nombre y version del cache
const CACHE_NAME = 'v1_cache_programador_web',
    urlsToCache = [
        /*ARCHIVOS O ENLACES A GUARDAR EN LA CACHE*/
        './',/*
        './js/main.js',
        './videos.html',
        './inicio.html',
        './tareas.html',
        './css/config/font.css',
        './css/pages/videos.css',
        './css/style.css',
        './assets/css/bootstrap.min.css',
        './assets/fonts/style.css',
        './assets/fonts2/style.css',
        './assets/iconos/16x16.png',
        './assets/iconos/32x32.png',
        './assets/iconos/64x64.png',
        './assets/iconos/128x128.png',
        './assets/iconos/192x192.png',
        './assets/iconos/256x256.png',
        './assets/iconos/384x384.png',
        './assets/iconos/512x512.png'*/
        './js/*.js',
        './*.html',
        './css/config/*.css',
        './css/pages/*.css',
        './css/*.css',
        './assets/css/bootstrap.min.css',
        './assets/iconos/*.png'
    ]

//EVENTOS DEL SERVICE WORKER

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(err => console.log('Falló registro de cache', err))
    )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        //Eliminamos lo que ya no se necesita en cache
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName)
                        }
                    })
                )
            })
            // Le indica al SW activar el cache actual
            .then(() => self.clients.claim())
    )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    //recuperar del cache
                    return res
                }
                //recuperar de la petición a la url
                return fetch(e.request)
            })
    )
})
