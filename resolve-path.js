console.log("Resolving", window.location.href, window.location.pathname);

const url = new URL(window.location.href);
const newUrl = new URL("/", url);
if (url.pathname !== "/") newUrl.searchParams.set("p", url.pathname);
if (url.search) newUrl.searchParams.set("q", url.search);
if (url.hash) newUrl.searchParams.set("h", url.hash);
window.location.href = newUrl.href;
