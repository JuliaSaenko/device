import cartPopup from './cart-popup';
import miniCartRender from "./miniCartRender";
let pageHeader = {
  render: async () => {
    let view = `<nav class="main-nav">
        <a class="page-header__logo main-nav__logo logo" href="/#/">
          <img class="logo__image" src="img/logo-device.svg" width="163" height="36" alt="Интернет-магазин Device">
        </a>
        <ul class="page-header__user-actions user-menu">
          <li class="user-menu__item user-menu__item--cart">
            <a class="user-menu__link user-menu__link--cart">Корзина</a>
          </li>
        </ul>
        <ul class="page-header__site-menu site-menu">
        </ul>
      </nav>
`;

    return view
  },
  after_render: async () => {
    const siteMenu = document.querySelector(`.site-menu`);
    const pageMainLink = document.querySelector(`.page-header__logo`);

    if (window.location.href.indexOf(`localhost:3000/`) !== -1) {
      siteMenu.innerHTML = `
       <li class="site-menu__item site-menu__item--dropdown">
            <a class="site-menu__link site-menu__link--dropdown" href="/#/catalog">Каталог товаров</a>
            <div class="page-header__catalog-dropdown dropdown">
              <ul class="catalog-menu">
                <li><a class="catalog-menu__link" href="#">Виртуальная реальность</a></li>
                <li><a class="catalog-menu__link" href="#">Моноподы для селфи</a></li>
                <li><a class="catalog-menu__link" href="#">Экшн-камеры</a></li>
              </ul>
              <ul class="catalog-menu">
                <li><a class="catalog-menu__link" href="#">Фитнес-браслеты</a></li>
                <li><a class="catalog-menu__link" href="#">Умные часы</a></li>
              </ul>
              <ul class="catalog-menu catalog-menu__info">
                <li><a class="catalog-menu__link" href="#">Квадрокоптеры</a></li>
              </ul>
            </div>
          </li>
          <li class="site-menu__item">
            <a class="site-menu__link site-menu__link--delivery"">Доставка</a>
          </li>
          <li class="site-menu__item">
            <a class="site-menu__link site-menu__link--warranty">Гарантия</a>
          </li>
          <li class="site-menu__item">
            <a class="site-menu__link site-menu__link--contacts">Контакты</a>
          </li>
      `;
    } else {
      pageMainLink.setAttribute(`href`, `/#/`);
      siteMenu.innerHTML = `
         <li class="site-menu__item site-menu__item--dropdown">
            <a class="site-menu__link site-menu__link--dropdown" href="/#/catalog">Каталог товаров</a>
            <div class="page-header__catalog-dropdown dropdown">
              <ul class="catalog-menu">
                <li><a class="catalog-menu__link" href="#">Виртуальная реальность</a></li>
                <li><a class="catalog-menu__link" href="catalog.html">Моноподы для селфи</a></li>
                <li><a class="catalog-menu__link" href="#">Экшн-камеры</a></li>
              </ul>
              <ul class="catalog-menu">
                <li><a class="catalog-menu__link" href="#">Фитнес-браслеты</a></li>
                <li><a class="catalog-menu__link" href="#">Умные часы</a></li>
              </ul>
              <ul class="catalog-menu catalog-menu__info">
                <li><a class="catalog-menu__link" href="#">Квадрокоптеры</a></li>
              </ul>
            </div>
          </li>
      `;
    }

    cartPopup();
    miniCartRender();
  }
};

export default pageHeader;
