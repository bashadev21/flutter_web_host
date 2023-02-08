'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "20178bfc9c81a67c32f95dedae25c3e1",
"index.html": "b7d47b86fb6bade2765ef7daa457d55a",
"/": "b7d47b86fb6bade2765ef7daa457d55a",
"main.dart.js": "7db490b7425753540289d5eb99bade09",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a4abb39583c4739efdb287a4beef96a7",
"assets/AssetManifest.json": "1e7cecc5fc54867186217f20d583067d",
"assets/NOTICES": "9a2008da08c1291541c396f41c857fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "1a8eb8cd6f1ede579784356b3d23f697",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/faq2.png": "beea4e164cf04f5d24bee3d9a87722e3",
"assets/assets/images/storeLocation_background.png": "97fc0d5524760dd3679aded16a1958d9",
"assets/assets/images/get_in_touch.png": "95aef82c628d28b87e54736422b22d0a",
"assets/assets/images/our_prod_web_1.png": "e617d9d90b7e76b289c9476e89adca86",
"assets/assets/images/home_image1.png": "1c67bbf1f351f4437776767c30531f28",
"assets/assets/images/faq1.png": "65fe3a7b48245221110c4c6062a6943c",
"assets/assets/images/cup_bun.png": "636b763ff1ec6a47011ecff2fd5f5bd4",
"assets/assets/images/our_product_bg1.png": "c1ca6e209da3a195a01338313685cc15",
"assets/assets/images/our_prod_web_2.png": "b98bb565f4703cd78e975f09f1fdf58e",
"assets/assets/images/our_product_mobile.png": "02c2abd12c08cf75bce53f7a17e4b414",
"assets/assets/images/wallet.png": "21d3789fbf1f86734ab409424dbbcc81",
"assets/assets/images/store_map.png": "020e4c7b3c0726823a6a3288c021cd90",
"assets/assets/images/recentBlog_background.png": "1041ddb9c0d4ec7deea3de2f49bda2fd",
"assets/assets/images/our_story_store.png": "a458b312dd3a79214cbca4fd34feabb8",
"assets/assets/images/our_prod_web_6.png": "1a0b3a35149152ee2f5d6e670459224d",
"assets/assets/images/cart.png": "e5be56781d8313fad66bd342ecc344c4",
"assets/assets/images/shipping_background.png": "35c8654f2cc4358bcacdfeedc58897ce",
"assets/assets/images/dustbin.png": "81a3a6a7dd5131aa3eb41fe563238cb4",
"assets/assets/images/followusmobile.png": "cb2a9fbe370538c4a189bb9ba0c37147",
"assets/assets/images/our_prod_web_5.png": "adef079dcf99f437ac0c254d35cf1839",
"assets/assets/images/left_arrow.png": "edf9c44cd625e71e8504513cb7142b06",
"assets/assets/images/instagram.png": "affd4216d017069a53c764f267b28b19",
"assets/assets/images/our_prod_web_4.png": "bde5c0af797dedf2b4137ea079ca44fd",
"assets/assets/images/shipping.png": "cf6d216f6b0a4714c5a902e1987475cd",
"assets/assets/images/our_story_mobile_rice.png": "292e05fbcfb2045ede16fcd46eb8e6bb",
"assets/assets/images/wheat.png": "2fa9b14bbc46c75700cb166a4b1b8555",
"assets/assets/images/home_background.png": "0d0e385b958933eddca4c19f477963d2",
"assets/assets/images/rupee_brown.png": "72ab42b261a09ed9c6ac63292d1b046a",
"assets/assets/images/speciality_breads.png": "11967709b4b76a54112de487ba233d4b",
"assets/assets/images/right_arrow.png": "2ad34fcae4a3e40d414ac68251eef716",
"assets/assets/images/non_veg.png": "a8d750c8d5bf00144f3d88c72a596000",
"assets/assets/images/our_products_1.png": "66bb8ae5d8e84440a2a307047f0ed139",
"assets/assets/images/testimonials_image.png": "452701f71a658f256a25a91997d55a82",
"assets/assets/images/slider1.png": "43e1d8f6ba970abd9183c4133cdad688",
"assets/assets/images/map.png": "fe9d77940e2f31116148a41990d13f41",
"assets/assets/images/slider3.png": "188cc517fb21aabb64d673d6350b2762",
"assets/assets/images/Vector.png": "1751f9860371b6c8fb1425d1d4f101db",
"assets/assets/images/puffs.png": "b55e22ff1bfd201bf55032c188fcb577",
"assets/assets/images/fullbun.png": "384b75a6c7ad2a7d84f8ff5acacd6649",
"assets/assets/images/classic_breads.png": "d2bb62485583a477b415f72efda5634c",
"assets/assets/images/our_products_2.png": "8126d907c436b31593b6762561ae47a6",
"assets/assets/images/edit_subscription_bg.png": "54c5084bbd40b36fab7febebe8bffb4b",
"assets/assets/images/our_products_3.png": "99a3ba85324f9eb47148063cace41ff8",
"assets/assets/images/our_story_mobile_bottomImg.png": "a0b72b23f90da6fce2560617a6b8b73f",
"assets/assets/images/slider2.png": "b9f9e3ed7056088394ad8ef0ea27c993",
"assets/assets/images/home_image.png": "a44b5f58b83a3efac72a333b72abbdf9",
"assets/assets/images/blog_mobile.png": "ab12a6f0ef8ee76eff51ed90a124974b",
"assets/assets/images/contactsUs_mobile_wheat.png": "e45dba8b41eb5f96ed2c16b960f9d6d6",
"assets/assets/images/ic_information.png": "8653d65af776b81fd9efcc4d482d75d9",
"assets/assets/images/our_products_4.png": "c6d12fe20bfd0588fd8b947fad1c8894",
"assets/assets/images/bangalore.png": "aed4ac65f05222fdb9f59693b0ffedee",
"assets/assets/images/tabbar_icon.png": "71b124cbcf43a7488eaf2edc72dabe44",
"assets/assets/images/faq_mobile.png": "285d25f781574b7dc08ed0c80c1a5464",
"assets/assets/images/ombc2.png": "44396832dcbfc2d6e81afe68029d15d5",
"assets/assets/images/ombc_logo.png": "fdc6beeda23aedc91d784357b18a5a6c",
"assets/assets/images/my_account_bg.png": "2c536501094f3d9fa2b8aa2edc812d8d",
"assets/assets/images/rupee_black.png": "e24b1b05991a6945e9b4716b38ccbb48",
"assets/assets/images/quotation_mark.png": "4c40bdb9911bc38b1795866af42fcc67",
"assets/assets/images/ombc3.png": "a411cf4d1e3e7c55324abf633d779166",
"assets/assets/images/our_story_mobile_cake.png": "65da69042a0c3b55ef667d489d0b4d6e",
"assets/assets/images/bakery_ingredients.png": "0686f29d03decae3525296d33ce55570",
"assets/assets/images/ombc1.png": "43d37c5b91c44f0938a88dbdadf8e951",
"assets/assets/images/change_pass.png": "ae28f1357313cb8e2f3c26adf1ce7bfb",
"assets/assets/images/our_goal.png": "3c3faca3ba309fdac0cc56968e8d09f9",
"assets/assets/images/bakery_ingerdient3.png": "76ef8d90a54058ec7f0096428af6c074",
"assets/assets/images/faq_instagram4.png": "f00710925b6425357f69f6769da8ae5c",
"assets/assets/images/bakery_ingredients_1.png": "8a334b41198004529c94445b6500897b",
"assets/assets/images/edit_subscription_bottom.png": "42533a3ee904286666c86b5a29d120ee",
"assets/assets/images/daily_menu_mobile2.png": "46b0769115f2dbc7ad11f9889dcf425e",
"assets/assets/images/twitter.png": "f3b02f87dcce33aaf295802a6c460275",
"assets/assets/images/product_bg_2.png": "61c4990b4d86284bcb39a04b9d70b604",
"assets/assets/images/faq_instagram1.png": "3f777bba6ad9ffc7f8e6d365f8969083",
"assets/assets/images/faq_instagram3.png": "a334137d4c18a1d679187803f5db459f",
"assets/assets/images/daily_menu_mobile.png": "d9693980d7be53926ce624969002a4a7",
"assets/assets/images/location.png": "e6e28d51a0166a0f6f0920c31f3f9840",
"assets/assets/images/bakery_ingerdient4.png": "bcd32c45eabe19fad5a2e1d115bda33d",
"assets/assets/images/product_bg_1.png": "e1bfcb9faeb35e17efccf08ec877aaef",
"assets/assets/images/bottom_image.png": "292c3bd3acb00845fa7ebb6ada73e4ce",
"assets/assets/images/faq_instagram2.png": "1e301213dabdb259ccaad2d06949c17e",
"assets/assets/images/app_logo.png": "f57ff02db02108a00424f128a4a10fae",
"assets/assets/images/product2.png": "05eb2cad49bc8fb08b113177564e2241",
"assets/assets/images/home3.png": "c98e22fa922fda56f6ba97754ebd68f0",
"assets/assets/images/ourStory_image.png": "4957ac4dcd0548b91578e7c091b17d85",
"assets/assets/images/blog_bacg2.png": "9e9cefe788591e9bbbc23028797e9e00",
"assets/assets/images/home_logo.png": "b720cd624af06a41fefbd152a128bdad",
"assets/assets/images/hyderabad.png": "a156eb15c0bae5cfef9305ed7882bbe3",
"assets/assets/images/home_logo.jpg": "eeedf96f19aa2e7fc511b217bfee3298",
"assets/assets/images/contact_us.png": "2f53d7af63ba53e6eacff2499c65fd44",
"assets/assets/images/our_product_bg.png": "fbdb087ddddc4b1b691877e7c469d3a4",
"assets/assets/images/product1.png": "0968a5229cf9ae2e39ad20daf70f7cfb",
"assets/assets/images/our_story_bg3.png": "7491f6b504e7c9b34b2a49ad4ccd515b",
"assets/assets/images/veg.png": "d85f9546f545b897e01896dc5ca7fb0d",
"assets/assets/images/contact_us_mobile.png": "fbec966b52d68d684e22e3e4002deadb",
"assets/assets/images/daily_menu.png": "b51b9a78b7796e16c35f38a40f7ff85f",
"assets/assets/images/wheat_bg.png": "9de49c2f471c89e10a3e66fad58ec960",
"assets/assets/images/pinterest.png": "93e76debc345dd2cea8b3d923609f980",
"assets/assets/images/facebook.png": "191fddefa716d0651f6e4770114c77bc",
"assets/assets/images/blog1.png": "53ef769771dd6d8190bfd380a76cab69",
"assets/assets/images/hamper.png": "c53b867e847a25d6117deb0dbbfeac74",
"assets/assets/images/logo24.png": "609bcfbd1d7b3c97d099e9f4c967fb4d",
"assets/assets/images/faq_mobile2.png": "4033a70ee86fa13f127646581730307d",
"assets/assets/images/our_prod_backg.png": "ef57ff50633f403aa6999246f6f226e9",
"assets/assets/images/head_left.png": "4aa435a17c1fe76f2bc3f149c1e46bc1",
"assets/assets/images/blog2.png": "fc30bcaeaf59e3691e03b72717337342",
"assets/assets/images/NicePng_bread-loaf-png_463516%25201.png": "dae80cc7f37a1c30b637fbcf28e79a42",
"assets/assets/images/blog_bagrd.png": "ae077d7099b45109cbe7ecaf8d06cf71",
"assets/assets/images/my_account_head.png": "dd692cfebfe8e7676bb19faa97b0c064",
"assets/assets/images/dialog_bg.png": "5985ba4ef29c5a6c090523e83089c613",
"assets/assets/images/my_account_mobile.png": "44cd19c80e2b5fa62b3964f039f332dd",
"assets/assets/images/subscribenow.png": "11c9c5beae15779ba504c8ab81f24c7c",
"assets/assets/images/head_right.png": "013316b37344554398934da59bc20dd7",
"assets/assets/images/chennai.png": "ac96b14d0a0bde31efb4d00f0f965000",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
