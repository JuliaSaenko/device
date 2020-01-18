import sliders from "./sliders";
import services from "./services";
import contacts from "./contacts";
import aboutUs from "./about-us";
import commentForm from "./comment-form";
import products from './products';
import fillter from './fillter';


let catalogPage = {
  render: async () => {
    let view = `
    <div class="page__wrapper">
        <h1 class="page__title">Моноподы для селфи</h1>

        <ul class="page__breadcrumbs breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="index.html">Главная</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="catalog.html">Каталог товаров</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link">Моноподы для селфи</a>
          </li>
        </ul>
      </div>

      <div class="catalog-columns--header">
        <div class="catalog-columns__wrapper page__wrapper">
          <p class="catalog-columns__narrow catalog-columns__title">Фильтр:</p>

          <section class="catalog-columns__wide sort">
            <h2 class="catalog-columns__title sort__title">Сортировка:</h2>
            <ul class="sort__type-list">
              <li class="sort__type-item sort__price">
                <a class="sort__type-link sort__type-link--current">По цене</a>
              </li>
              <li class="sort__type-item">
                <a class="sort__type-link" href="#">По типу</a>
              </li>
              <li class="sort__type-item">
                <a class="sort__type-link" href="#">По популярности</a>
              </li>
            </ul>
            <ul class="sort__order-list">
              <li class="sort__order-item" id="upprice">
                <a class="sort__order-link sort__order-link--up">
                  <span class="visually-hidden">По возрастанию</span>
                </a>
              </li>
              <li class="sort__order-item" id="downprice">
                <a class="sort__order-link sort__order-link--down sort__order-link--current">
                  <span class="visually-hidden">По убыванию</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div class="catalog-columns">
        <div class="catalog-columns__wrapper page__wrapper">
          <section class="catalog-columns__narrow filter">
            <h2 class="visually-hidden">Фильтр товаров</h2>
            <form class="filter__form" action="https://echo.htmlacademy.ru" method="get">
              <fieldset class="filter__section" id ="category">
                <legend class="filter__section-title">Категория</legend>
                <ul class="filter__options filter__category">
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="actionCamera" type="checkbox" name="actionCamera">
                    <label class="filter__option-label filter__option-label--check" for="actionCamera">Экшн камеры</label>
                  </li>
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="fitnessTracker" type="checkbox" name="fitnessTracker">
                    <label class="filter__option-label filter__option-label--check" for="fitnessTracker">Фитнес трекеры</label>
                  </li>
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="quadrocopters" type="checkbox" name="quadrocopters">
                    <label class="filter__option-label filter__option-label--check" for="quadrocopters">Квадрокоптеры</label>
                  </li>
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="selfieSticks" type="checkbox" name="selfieSticks">
                    <label class="filter__option-label filter__option-label--check" for="selfieSticks">Селфи палки</label>
                  </li>
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="watches" type="checkbox" name="watches">
                    <label class="filter__option-label filter__option-label--check" for="watches">Часы</label>
                  </li>
                  <li>
                    <input class="category__filter filter__option visually-hidden" id="vr" type="checkbox" name="vr">
                    <label class="filter__option-label filter__option-label--check" for="vr">VR/AR</label>
                  </li>
                </ul>
              </fieldset>
              <div id="brand"></div>
            </form>
          </section>

          <section class="catalog-columns__wide catalog">
            <h2 class="visually-hidden">Каталог</h2>
            <ul class="catalog__list">
            </ul>

          </section>
        </div>
      </div>
    `;


    return view
  }
  , after_render: async () => {
    products();
    fillter();
  }

};

export default catalogPage;
