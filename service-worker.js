"use strict";var precacheConfig=[["/related-posts-by-taxonomy/index.html","06cd1b9669be8ffe0496d98048cd3396"],["/related-posts-by-taxonomy/static/css/main.c147bddf.css","aae0a4b461b35ac09073406341ab1834"],["/related-posts-by-taxonomy/static/js/0.6e663b0a.chunk.js","00d1a976c1b5010d0448e71c49646ef3"],["/related-posts-by-taxonomy/static/js/1.e187caa1.chunk.js","a9aaf93dfbc516ccdfd1be9a6f5e9fe6"],["/related-posts-by-taxonomy/static/js/10.7d44a761.chunk.js","689a031620b46f4ea4b73968a02fa2d2"],["/related-posts-by-taxonomy/static/js/11.c5ba3bbb.chunk.js","31c7f9b4d59c024cd7f0aacad3ebc5e4"],["/related-posts-by-taxonomy/static/js/12.f8665f81.chunk.js","d1695556aea0996ef0c91add97e04517"],["/related-posts-by-taxonomy/static/js/13.ad163910.chunk.js","b32f5c3412c6afbbeb8934fdba582b01"],["/related-posts-by-taxonomy/static/js/14.8885707d.chunk.js","a34d057039d2f64d2c379cf78a9e437c"],["/related-posts-by-taxonomy/static/js/15.6707f79d.chunk.js","248f033004174b1acf4a2e4c4407be9c"],["/related-posts-by-taxonomy/static/js/16.d225aca7.chunk.js","e040d5375fb9dcb0589ef54ddce5896f"],["/related-posts-by-taxonomy/static/js/17.36d7c72d.chunk.js","7f7a2d1a497eb03dad4de9df1f1177e6"],["/related-posts-by-taxonomy/static/js/18.a6eb331b.chunk.js","19cebe8b2fdbbff7a69ff3095e37f753"],["/related-posts-by-taxonomy/static/js/19.e7921ed4.chunk.js","fad985ff1cb478104a7b0c2a05355f40"],["/related-posts-by-taxonomy/static/js/2.50ce3016.chunk.js","e23f887f6464042e389b6d1b47639998"],["/related-posts-by-taxonomy/static/js/3.27ee1325.chunk.js","ffaa9bd7b3ac8e98aaf52ddd858e2f30"],["/related-posts-by-taxonomy/static/js/4.62597d06.chunk.js","6c71091fb72e8243260b836750c36b00"],["/related-posts-by-taxonomy/static/js/5.3213b5ab.chunk.js","f84afb27c191d960e8b4e402409c0101"],["/related-posts-by-taxonomy/static/js/6.33bd03ce.chunk.js","b9d76210045c354ecd7ea8685ab33a39"],["/related-posts-by-taxonomy/static/js/7.0d801ccc.chunk.js","f6990d09d591847ed42803ffa044b970"],["/related-posts-by-taxonomy/static/js/8.f951f8b7.chunk.js","c691d17887847c642d36e9577b1ea98d"],["/related-posts-by-taxonomy/static/js/9.f7b783c7.chunk.js","93112b47c7d1de5143679146dabb883a"],["/related-posts-by-taxonomy/static/js/main.a36b5860.js","9fb4a74d04f031f172408b0ea3f5b95e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),e=urlsToCacheKeys.has(a));var n="/related-posts-by-taxonomy/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});