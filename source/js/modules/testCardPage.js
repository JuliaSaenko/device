import comments from "./comments";
import {toggleShowClass} from "./utils";
import productSlider from "./product-slider";
//import {showProductDescription} from "./description";

let testCardPage = {
  render : async () => {
    let view =  /*html*/`
           <div class="product-card-wrapper">
   <ul class="page__breadcrumbs breadcrumbs product-card__breadcrumbs">
     <li class="breadcrumbs__item"><a class="breadcrumbs__link"  href="/#/main">Главная</a></li>
     <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/#/catalog">Каталог товаров</a></li>
     <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="#">Моноподы для селфи</a></li> <!-- Добавить обработчик фильтрации -->
     <li class="breadcrumbs__item">Beike QZSD Q999H</li>
    </ul>

  <div class="product-wrapper">
    <button type="button" class="product__close btn--close"><span class="visually-hidden">закрыть</span></button>
    <div class="product__gallery-container">
       <div class="product__gallery gallery-top swiper-container">
          <ul class="product__slider swiper-wrapper">
            <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-l.jpg" width="600" height="600"></li>
            <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-2-l.jpg" width="600" height="600"></li>
            <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-3-l.jpg" width="600" height="600"></li>
          </ul>
       </div>
       <div class="product__gallery-small swiper-container gallery-thumbs">
          <ul class="product__slider-small swiper-wrapper">
            <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-s.jpg" width="100" height="100"></li>
            <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-2-s.jpg" width="100" height="100"></li>
            <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-3-s.jpg" width="100" height="100"></li>
          </ul>
        </div>
      </div>
      <div class="product__info">
        <div class="product__heading">
          <h1 class="product__title">Монопод Beike QZSD Q999H</h1>
          <p class="product__art">Артикул: <span id="product-article">#12345</span></p>
          <div id="reviewStars-input">
            <input class="stars-rait" type="checkbox" id="st1" value="1">
            <label for="st1"></label>
            <input class="stars-rait" type="checkbox" id="st2" value="2">
            <label for="st2"></label>
            <input class="stars-rait" type="checkbox" id="st3" value="3">
            <label for="st3"></label>
            <input class="stars-rait" type="checkbox" id="st4" value="4">
            <label for="st4"></label>
            <input class="stars-rait" type="checkbox" id="st5" value="5">
            <label for="st5"></label>
          </div>
        </div>

        <div class="product__about">
          <div class="product__price-wrapper inner-order-content">
            <p class="product__price price-title">Цена: <span id="productPrice">$ 1000</span></p>
          </div>
          <button class="product__btn-buy main-buy-btn btn">🛒Купить</button>
          <div class="product__delivery-info">
            <p>Осталось в наличии: 2</p>
          </div>
        </div>
        <div class="product__brns">
          <button class="product__brn product__brn--description btn">Описание</button>
          <button class="product__brn product__brn--review btn">Отзывы</button>
        </div>
        <div class="product__review-wrapper">
          <a class="product__review" id="feedback">Оставить отзыв</a>
        </div>
      </div>
     <div class="product__description">
        <h2 class="product__description-title">Расширяющийся гидродинамический удар</h2>
        <p class="product__description-text">
          Призма эксперментально верифицируема. В соответствии с принципом неопределенности, плазменное
          образование когерентно.
          Вещество, вследствие квантового характера явления, зеркально. Многочисленные расчеты предсказывают, а
          эксперименты подтверждают, что гомогенная среда зеркально вращает квантовый фотон.
        </p>
        <p class="product__description-text">
          Галактика сжимает фотон.
          Как легко получить из самых общих соображений, поверхность изотермично искажает взры
          Возмущение плотности, как того требуют законы термодинамики, растягивает фотон. Мишень, в рамках
          ограничений классической механики, трансформирует поток при
          любом агрегатном состоянии среды взаимодействия.
        </p>
      </div>
      <div class="products__reviews reviews">
       <ul class="reviews__list">
        <li class="reviews__item">
          <div class="reviews__heading">
            <b class="reviews__author">Константин Константинопольский</b>
            <p class="reviews__publication">Опубликовано <span class="reviews__time">20 апреля 2019</span></p>
          </div>
          <div class="review__content">
              <blockquote>
                Излучение облучает фронт, однозначно свидетельствуя о неустойчивости процесса в целом. Сверхпроводник
                конфокально нейтрализует спиральный квазар.
                Солитон растягивает наносекундный вихрь, при этом дефект массы не образуется. Взвесь, несмотря на
                некоторую вероятность коллапса.
              </blockquote>
          </div>
        </li>
        <li class="reviews__item">
          <div class="reviews__heading">
            <b class="reviews__author">Константин Константинопольский</b>
            <p class="reviews__publication">Опубликовано <span class="reviews__time">12 августа 2019</span></p>
          </div>
          <div class="review__content">
              <blockquote>
                Излучение облучает фронт, однозначно свидетельствуя о неустойчивости процесса в целом. Сверхпроводник
                конфокально нейтрализует спиральный квазар.
                Солитон растягивает наносекундный вихрь, при этом дефект массы не образуется. Взвесь, несмотря на
                некоторую вероятность коллапса.
              </blockquote>
          </div>
        </li>
        <li class="reviews__item">
          <div class="reviews__heading">
            <b class="reviews__author">Константин Константинопольский</b>
            <p class="reviews__publication">Опубликовано <span class="reviews__time">23 ноября 2019</span></p>
          </div>
          <div class="review__content">
              <blockquote>
                Излучение облучает фронт, однозначно свидетельствуя о неустойчивости процесса в целом. Сверхпроводник
                конфокально нейтрализует спиральный квазар.
                Солитон растягивает наносекундный вихрь, при этом дефект массы не образуется. Взвесь, несмотря на
                некоторую вероятность коллапса.
              </blockquote>
          </div>
        </li>
      </ul>
      </div>
  </div>
</div>
        `;
    return view
  }
  , after_render: async () => {
    const product = document.querySelector(`.product-card-wrapper`);
    const productDescriptionBtn = product.querySelector(`.product__brn--description`);
    const productDescription = product.querySelector(`.product__description`);

    productDescriptionBtn.addEventListener(`click`, ()=> {
      toggleShowClass(productDescription);
    });
    productSlider();
    comments();
  }
};

export default testCardPage;
