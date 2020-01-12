import order from './order';

let pageHeader = {
  render: async () => {
    let view = `       <nav class="main-nav">
        <a class="page-header__logo main-nav__logo logo" href="/#/">
          <img class="logo__image" src="img/logo-device.svg" width="163" height="36" alt="Интернет-магазин Device">
        </a>

<!--        <form class="search-form" action="https://echo.htmlacademy.ru" method="get">-->
<!--          <label class="visually-hidden" for="site-search">Поиск по сайту</label>-->
<!--          <input class="search-form__input" id="site-search" type="text" name="search" placeholder="Поиск по сайту" required>-->
<!--          <button class="search-form__btn" type="submit">Найти</button>-->
<!--        </form>-->

<!--        <ul class="page-header__user-menu user-menu">-->
<!--          <li class="user-menu__item">-->
<!--            <a class="user-menu__link user-menu__link--login" href="#">Войти</a>-->
<!--          </li>-->
<!--        </ul>-->

        <ul class="page-header__user-actions user-menu">
<!--          <li class="user-menu__item">-->
<!--            <a class="user-menu__link user-menu__link--compare" href="#">Сравнить</a>-->
<!--          </li>-->
          <li class="user-menu__item">
            <a class="user-menu__link user-menu__link--cart">Корзина</a>
          </li>
        </ul>

        <ul class="page-header__site-menu site-menu">
          <li class="site-menu__item">
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
              <ul class="catalog-menu">
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
        </ul>
      </nav>
`;
    return view
  },
  after_render: async () => {

  }
};

export default pageHeader;
