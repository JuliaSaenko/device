"use strict";



import mainPage from './main-page';
import catalogPage from "./catalog";
// import About        from './views/pages/About.js'
// import Error404     from './views/pages/Error404.js'
// import PostShow     from './views/pages/PostShow.js'
// import Register     from './views/pages/Register.js'

import Error404     from './error404';

import pageHeader       from './page-header';
import pageFooter    from './page-footer';

import urlUtils from  './utils';

const pagesRender = () => {
  // List of supported routes. Any url other than these routes will throw a 404 error

  const routes = {
    '/'             : mainPage
    , '/catalog'      : catalogPage
    // , '/item/:id'      : Item
    // , '/registration'   : Registration
  };





// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
  const router = async () => {

    // Lazy load view element:
    const header = null || document.querySelector(`.page__header`);
    const mainContainer = null || document.querySelector(`.page__main`);
    const footer = null || document.querySelector(`.page__footer`);

    // Render the Header and footer of the page
    header.innerHTML = await pageHeader.render();
    await pageHeader.after_render();
    footer.innerHTML = await pageFooter.render();
    await pageFooter.after_render();


    // Get the parsed URl from the addressbar
    let request = urlUtils.parseRequestURL();

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    mainContainer.innerHTML = await page.render();
    await page.after_render();

  }

// Listen on hash change:
  window.addEventListener('hashchange', router);

// Listen on page load:
  window.addEventListener('load', router);

};

export default pagesRender;
