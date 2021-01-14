import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// workbox needs this for caching.
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({request}) => request.destination === 'script' ||
                  request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// registerRoute(
//   ({url}) => url.pathname.startsWith('/'),
//   new StaleWhileRevalidate()
// );
