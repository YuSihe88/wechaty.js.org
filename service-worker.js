                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/11/30/a-wechat-message-forward-robot/","revision":"f965bfdcf0760e748a57e83e7fff94b2"},{"url":"/2021/11/29/try-to-build-a-wechaty-tiktok-puppet/","revision":"86bb26d873ab3b7ad10b51db2da1d2ec"},{"url":"/2021/11/27/docker-multi-platform-for-raspberry-pi-arm/","revision":"70e06a358e91bc6c004363464d4ab5b4"},{"url":"/2021/11/07/how-to-develop-wechaty-puppet-module-supporting-5g-messages/","revision":"cd596d47e9c798812ba2d0e03025f924"},{"url":"/2021/11/07/gsod-2021-improve-introduction-and-explanation-project-joint-report/","revision":"848b090e04e2c98a108133f5e28db933"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
