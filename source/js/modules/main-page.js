import commentForm from './comment-form';
import sliders from './sliders';
import services from './services';
import contacts from './contacts';
import aboutUs from './about-us';

let mainPage = {
  render : async () => {
    let view = `
              <h1 class="visually-hidden">Интернет-магазин гаджетов «Девайс»</h1>

      <section class="promo page__section page__wrapper">
        <h2 class="visually-hidden">Рекомендуемые товары</h2>

        <div class="slider main-slider swiper-container">

          <ol class="promo__list slider__list swiper-wrapper">
            <li class="promo__item promo__item--one slider__item swiper-slide">
              <h3 class="visually-hidden">Монопод</h3>
              <div class="promo__image-wrapper">
                <img class="promo__image" src="img/promo-1.png" width="560" height="524" alt="Палка для селфи">
              </div>
              <div class="promo__info">
                <b class="promo__lead">Делай селфи,<br> как Бен Стиллер!</b>
                <p class="promo__description">Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 килограмм.</p>
                <a class="promo__btn btn" href="#">Подробнее</a>
                <table class="parameters">
                  <caption class="visually-hidden">Параметры товара</caption>
                  <thead class="parameters__header">
                    <tr>
                      <th class="parameters__name">Длина палки</th>
                      <th class="parameters__name">Вес палки</th>
                      <th class="parameters__name">Материал</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="parameters__value">8,5 м</td>
                      <td class="parameters__value">5 кг</td>
                      <td class="parameters__value">Карбон</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li class="promo__item promo__item--two slider__item swiper-slide">
              <h3 class="visually-hidden">Фитнес-браслет</h3>
              <div class="promo__image-wrapper">
                <img class="promo__image" src="img/promo-2.png" width="560" height="524" alt="Фитнес-браслет">
              </div>
              <div class="promo__info">
                <b class="promo__lead">Худеем<br> правильно!</b>
                <p class="promo__description">Мотивирующие фитнес-браслеты помогут найти в себе силы не&nbsp;пропускать занятия и соблюдать диету.</p>
                <a class="promo__btn btn" href="#">Подробнее</a>
                <table class="parameters">
                  <caption class="visually-hidden">Параметры товара</caption>
                  <thead class="parameters__header">
                    <tr>
                      <th class="parameters__name">Без подзарядки</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="parameters__value">48 часов</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li class="promo__item promo__item--three slider__item swiper-slide">
              <h3 class="visually-hidden">Квадрокоптер</h3>
              <div class="promo__image-wrapper">
                <img class="promo__image" src="img/promo-3.png" width="560" height="524" alt="Квадрокоптер">
              </div>
              <div class="promo__info">
                <b class="promo__lead">Порхает как бабочка, жалит как пчела!</b>
                <p class="promo__description">Этот обычный, на первый взгляд, квадрокоптер оснащен мощным&nbsp;лазером, замаскированным под стандартную камеру.</p>
                <a class="promo__btn btn" href="#">Подробнее</a>
                <table class="parameters">
                  <caption class="visually-hidden">Параметры товара</caption>
                  <thead class="parameters__header">
                    <tr>
                      <th class="parameters__name">Дальность полета</th>
                      <th class="parameters__name">Радиус поражения</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="parameters__value">800 м</td>
                      <td class="parameters__value">50 м</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ol>
          <div class="promo__controls pagination-bullets"></div>
        </div>
      </section>

      <section class="categories page__wrapper">
        <h2 class="visually-hidden">Категории товаров</h2>
        <ul class="categories__list">
          <li class="categories__item">
            <a class="categories__link categories__link--virtual" href="#">Виртуальная реальность</a>
          </li>
          <li class="categories__item">
            <a class="categories__link categories__link--monopod" href="catalog.html">Моноподы для&nbsp;селфи</a>
          </li>
          <li class="categories__item">
            <a class="categories__link categories__link--camera" href="#">Экшн-камеры</a>
          </li>
          <li class="categories__item">
            <a class="categories__link categories__link--fitness" href="#">Фитнес-браслеты</a>
          </li>
          <li class="categories__item">
            <a class="categories__link categories__link--watches" href="#">Умные часы</a>
          </li>
          <li class="categories__item">
            <a class="categories__link categories__link--copter" href="#">Квадрокоптеры</a>
          </li>
        </ul>
      </section>

      <section class="services page__section" id="services">
        <h2 class="visually-hidden">Услуги</h2>
        <div class="services__slider slider page__wrapper">
          <div class="services__controls">
            <button type="button" class="services__btn services__btn--delivery btn services__btn--active" >Доставка</button>
            <button type="button" class="services__btn services__btn--warranty btn">Гарантия</button>
            <button type="button" class="services__btn services__btn--credit btn">Кредит</button>
          </div>

          <ul class="services__list slider__list">
            <li class="services__item services__item--delivery">
              <h3 class="services__title">Доставка</h3>
              <p class="services__description">Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.</p>
            </li>
            <li class="services__item services__item--warranty services__item--hidden ">
              <h3 class="services__title">Гарантия</h3>
              <p class="services__description">Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый.<br> Товар, не дом, конечно же.</p>
            </li>
            <li class="services__item services__item--credit services__item--hidden ">
              <h3 class="services__title">Кредит</h3>
              <p class="services__description">Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия кредита. Выгодные для нашего банка, разумеется.</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="brands page__wrapper">
        <h2 class="visually-hidden">Популярные производители</h2>
        <div class="brands__list-wrapper swiper-container">
          <ul class="brands__list swiper-wrapper">
            <li class="brands__item swiper-slide">
              <a class="brands__logo" href="#">
                <img class="brands__logo-image" src="img/logo-dji.png" width="260" height="100" alt="DJI">
              </a>
            </li>
            <li class="brands__item swiper-slide">
              <a class="brands__logo" href="#">
                <img class="brands__logo-image" src="img/logo-sp-gadgets.png" width="260" height="100" alt="SP Gadgets">
              </a>
            </li>
            <li class="brands__item swiper-slide">
              <a class="brands__logo" href="#">
                <img class="brands__logo-image" src="img/logo-go-pro.png" width="260" height="100" alt="Go Pro">
              </a>
            </li>
            <li class="brands__item swiper-slide">
              <a class="brands__logo" href="#">
                <img class="brands__logo-image" src="img/logo-vive.png" width="260" height="100" alt="Vive">
              </a>
            </li>
          </ul>
          <div class="brands__scrollbar"></div>
        </div>
      </section>

      <div class="columns page__wrapper">
        <section class="about-us columns__item">
          <h2 class="columns__title">О нас</h2>
          <p class="about-us__text">Огромный выбор гаджетов не оставит равнодушным гика, который&nbsp;есть в&nbsp;каждом из&nbsp;нас.</p>
          <p class="about-us__text">Мы можем доставить ваш товар в самые отдаленные точки России! DEVICE работает со многими транспортными компаниями:</p>
          <ul class="about-us__list">
            <li class="about-us__list-item">Деловые Линии</li>
            <li class="about-us__list-item">Автотрейдинг</li>
            <li class="about-us__list-item">ЖелДорЭкспедиция</li>
          </ul>
<!--          <a class="btn" href="#">Подробнее о нас</a>-->
          <button type="button" class="contacts__btn btn">Напишите нам</button>
        </section>

        <section class="contacts columns__item">
          <h2 class="columns__title">Контакты</h2>
          <p class="contacts__text">Вы можете забрать товар сами, заехав в наш офис. Заодно, вы сможете проверить работоспособность покупки. Всякое бывает.</p>
          <div class="contacts__map">
            <iframe class="contacts__map-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4923898988923!2d30.521080765938255!3d50.45055502947539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c3%3A0xb528dc4d6dadc4f8!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LLQuNGB0LjQvNC-0YHRgtC4LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1577112111510!5m2!1sru!2sua"></iframe>
          </div>
        </section>
      </div>
        `;


    return view
  }
  , after_render: async () => {
    sliders();
    services();
    contacts();
    aboutUs();
    commentForm();
  }

};

export default mainPage;
