'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cc20cb4e91c30bed6e35b4fdd1c39d3",
"native_bridge.js": "3ab3a7e0ed1e5a32bd5b9b32f876052c",
"index.html": "fdde859511a86773744724a86fc7fa3f",
"/": "fdde859511a86773744724a86fc7fa3f",
"main.dart.js": "10a24db6b40d80c305d9a7e2d43297db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b2da32757322e11f0e061b28321b83b1",
"assets/AssetManifest.json": "bdea3121ec9a279d7233b19fc6b25dfe",
"assets/NOTICES": "b1b9bfd20a56e36bbea47499b98ad171",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/bus/assets/vector_images/bus_swap_icon.svg": "f964ed58fd568fe7f3d3241d3e09a498",
"assets/packages/bus/assets/vector_images/coupons_icon.svg": "380da461fbc94b726ed6d89c25fcfd76",
"assets/packages/bus/assets/vector_images/forward_arrow.svg": "51b2addb6d1da3938f873fe6536f5e2b",
"assets/packages/bus/assets/vector_images/bus_location_icon.svg": "015612a8c113fc44536f4fe0689bdefd",
"assets/packages/bus/assets/vector_images/bus_source_icon.svg": "dbe72fdea51fabc3d4d1110f250cfff0",
"assets/packages/bus/assets/vector_images/location_trending_icon.svg": "3d43f02913c04034119a6843be883b8a",
"assets/packages/bus/assets/vector_images/bus_destination_icon.svg": "8bc37492106adcd0236a1ae8bc29bc7e",
"assets/packages/bus/assets/images/bus_seat_selection/sort_and_filter_icon.svg": "a7c50002d2a476e2e82fc30a85a2162f",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_normal_horizontal.svg": "fd3902728a8e324abe3029be3f8c7b13",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/seater_normal.svg": "935083853fd036c474a89d8129b75f74",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_normal.svg": "34a0fd860ca40a84bcc935422c301811",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_ladies.svg": "22eb010551b9af58e172bc2b52d7f6d7",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_ladies_horizontal.svg": "dfd942fd9bc1086f37941a39008dc611",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/seater_ladies.svg": "0838027fdccab53edece152164f11d51",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_normal_horizontal.svg": "341cc2c8fd4bebd124f37665fcc3b890",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/seater_normal.svg": "52e53eb088e8d3ed60ee3efaf6bef4fd",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_normal.svg": "e6c598882eda3384a0c6f496525d4f5f",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_ladies.svg": "95e366c0ff856c8190c67535c5a66a8b",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_ladies_horizontal.svg": "e38400b6d40d446ffab6daf262463d4e",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/seater_ladies.svg": "7ae9417d095daf1cabfdedd82f00b536",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_normal_horizontal.svg": "e7235dccfe9a521260d419dbb4ee48e9",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/seater_normal.svg": "c3dff3067705fc23cea2661270407226",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_normal.svg": "1baf6a483b44b1ef695a68a844eaa7a9",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_ladies.svg": "a640fb2369372ca091aec81ae469f5f0",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_ladies_horizontal.svg": "3c6310a0a80302d6ab35c34983fb2498",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/seater_ladies.svg": "6fe1efb6c547bd906edd3c129d2b7c79",
"assets/packages/bus/assets/images/bus_seat_selection/bus_steering_icon.svg": "06ccf74db4fce80ce704520655a870b5",
"assets/packages/bus/assets/images/cancelled_sucess.svg": "7206243703b2ef873de253215ae85447",
"assets/packages/bus/assets/images/placeholder.png": "e202fbfde53aa662fde93ad62d33fd24",
"assets/packages/bus/assets/images/cancelled_stamp.png": "c560903c475054a2cea3b4848f59f1fc",
"assets/packages/bus/assets/lang/en.json": "3aa47721c5f16e2a37e2b3f2a3fa03cc",
"assets/packages/nuclei_core/assets/images/place_holder.png": "a33d23d0a44600e9bfc991acc1d0b232",
"assets/packages/nuclei_core/assets/images/no_content_icon.svg": "8a5a9d48595d70ce44b50d49e5f811dd",
"assets/packages/nuclei_core/assets/images/powered_by_nuclei.png": "01902b6dcd855633463bf3969b304dac",
"assets/packages/nuclei_core/assets/images/coupons_icon.svg": "380da461fbc94b726ed6d89c25fcfd76",
"assets/packages/nuclei_core/assets/images/one-way-arrow.svg": "8b35413ba7bca176c0bb4ea99c51dfe0",
"assets/packages/nuclei_core/assets/images/network_error.png": "34b71e3b44107dba09ba8e00fef25ae2",
"assets/packages/nuclei_core/assets/images/cart_coupon_applied.png": "8a256858c8f70cf79566829e690147bf",
"assets/packages/nuclei_core/assets/images/sort_and_filter_icon.svg": "a7c50002d2a476e2e82fc30a85a2162f",
"assets/packages/nuclei_core/assets/images/right_arrow_shape.png": "371178dde2630f7ff502437134fa1a9c",
"assets/packages/nuclei_core/assets/images/location_permission.svg": "441687b31524a55115fe0805628fff53",
"assets/packages/nuclei_core/assets/images/no_transaction_icon.svg": "e910f0680840c00565d254188a85d63f",
"assets/packages/nuclei_core/assets/images/technical_issue_image.png": "0d8e0464524238d1984606397b7055a9",
"assets/packages/nuclei_core/assets/images/no_search_results.svg": "ab145f529214de480722bec0665cae25",
"assets/packages/nuclei_core/assets/images/two-way-arrow.svg": "e21784f14e13f246a3928b0c7aad8a1d",
"assets/packages/nuclei_core/assets/images/location_background.png": "7b7ce2ab7741587f348188f2f89c7a0e",
"assets/packages/nuclei_core/assets/images/neu_flat_no_search_result.svg": "a9a0d99dadfa200497f64a0b21c8736b",
"assets/packages/nuclei_core/assets/images/neu_flat_no_internet_image.svg": "f7ccc50d742a365b563e6ad97fee2c89",
"assets/packages/nuclei_core/assets/images/neu_flat_technical_issue.svg": "84fc4081327e2cb4990aa6743b33bffe",
"assets/packages/nuclei_core/assets/images/no_booking_icon.svg": "a0f3bd0f939d96447aecd21c633ecd89",
"assets/packages/nuclei_core/assets/lang/en.json": "33a6a75029e2ba4fe5da8d71e0a3ba24",
"assets/packages/nuclei_core/assets/raw/certificate.pem": "96141e69a3fd3e6ed9f193bd799b21be",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
