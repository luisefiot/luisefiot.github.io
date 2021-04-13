/* Este archivo debe estar
 * colocado en la carpeta raíz del
 * sitio.
 * 
 * Cualquier cambio en el
 * contenido de este archivo hace
 * que el service worker se
 * reinstale.
 * 
 * Normalmente se cambia el número
 * en el nombre del caché cuando
 * cambia el contenido de los
 * archivos.
 * 
 * Cuando uses GitHub Pages espera
 * 11 minutos después de hacer los
 * cambios en tu sitio, para
 * depués actualizar este archivo.
 */
const CACHE = "dmppwa-2.03";

/** Archivos requeridos para que
 * la aplicación funcione fuera de
 * línea.
 */
const ARCHIVOS = [
 "historial.html",
  "dispositivo.html",
  ".vscode/settings.json",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "site.webmanifest",
  "cmp/mi-footer.js",
  "css/colores.css",
  "css/estilos.css",
  "img/icono1024.png",
  "img/icono2048.png",
  "img/icono256.png",
  "disp/ProxyEntrada.js",
   "disp/CtrlDispositivo.js",
   "disp/ProxyHistorial.js",
   "disp/ProxySalida.js",
   "disp/ResInt.js ",
   "disp/utilIoT.js ",
  "js/config.js",
  "js/CtrlDivide.js",
  "js/regSw.js",
   "js/init.js",
   "js/CtrlMovil.js ",
   "js/CtrlHistorial.js",
   "js/tipos.js ",
  "lib/campo-dinamico.js",
  "lib/campos.css",
  "lib/icono.css",
  "lib/material-icons.css",
  "lib/MaterialIcons-Regular.codepoints",
  "lib/MaterialIcons-Regular.ttf",
  "lib/mi-nav.css",
  "lib/movil.js",
  "lib/principal.css",
  "lib/roboto-v20-latin-700.woff",
  "lib/roboto-v20-latin-700.woff2",
  "lib/roboto-v20-latin-regular.woff",
  "lib/roboto-v20-latin-regular.woff2",
  "lib/roboto.css",
   "lib/util.js",
   "lib/tiposFire.js ",
   "lib/fabrica.js ",
  
  "/"
];

self.addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    // @ts-ignore
    evt.waitUntil(cargaCache());
  });

/* Toma los archivos solicitados
 * de la caché; si no los
 * encuentra, se descargan. */
self.addEventListener("fetch",
  evt => {
    // @ts-ignore
    if (evt.request.method ===
      "GET") {
      // @ts-ignore
      evt.respondWith(
        usaCache(evt));
    }
  });

self.addEventListener("activate",
  () =>
    console.log("sw activo."));

async function cargaCache() {
  console.log(
    "Intentando cargar cache",
    CACHE);
  const cache =
    await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache", CACHE,
    "cargado");
}

async function usaCache(evt) {
  const cache =
    await caches.open(CACHE);
  const response =
    await cache.match(evt.request,
      { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
