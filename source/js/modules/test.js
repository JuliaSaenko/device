// // List of supported routes. Any url other than these routes will throw a 404 error
//
// const mainContainer = null || document.querySelector(`.page__main`);
//
// const routes = {
//   '/'             : Home
//   , '/catalog'      : About
//   , '/item/:id'      : Item
//   , '/registration'   : Registration
// };
//
//
// // The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
// const router = async () => {
//
//   // Lazy load view element:
//   //const content = null || document.getElementById('page_container');
//
//   // Get the parsed URl from the addressbar
//   let request = Utils.parseRequestURL()
//
//   // Parse the URL and if it has an id part, change it with the string ":id"
//   let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
//
//   // Get the page from our hash of supported routes.
//   // If the parsed URL is not in our list of supported routes, select the 404 page instead
//   let page = routes[parsedURL] ? routes[parsedURL] : Error404;
//   mainContainer.innerHTML = await page.render();
//   await page.after_render();
//
// };
//
// parseRequestURL : () => {
//
//   let url = location.hash.slice(1).toLowerCase() || '/';
//   let r = url.split("/")
//   let request = {
//     resource    : null,
//     id          : null,
//     verb        : null
//   }
//   request.resource    = r[1]
//   request.id          = r[2]
//   request.verb        = r[3]
//
//   return request
// };
//
// // Listen on hash change:
// window.addEventListener('hashchange', router);
//
// // Listen on page load:
// window.addEventListener('load', router);
