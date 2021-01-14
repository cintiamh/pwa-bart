import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

// workbox needs this for caching.
precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(
//   ({request}) => request.destination === 'script' ||
//                   request.destination === 'style',
//   new StaleWhileRevalidate({
//     cacheName: 'static-resources',
//   })
// );

// registerRoute(
//   ({url}) => url.pathname.startsWith('https://api.bart.gov/api/'),
//   new StaleWhileRevalidate({
//     cacheName: 'api-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200, 404]
//       })
//     ]
//   })
// );

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    console.log(url, url.origin);
    if (url.origin === 'https://api.bart.gov') {
        event.respondWith(new StaleWhileRevalidate().handle({event, request}))
    } 
})