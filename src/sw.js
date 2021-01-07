import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// workbox needs this for caching.
precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(
//   ({url}) => url.pathname.startsWith('/images/avatars/'),
//   new StaleWhileRevalidate()
// );