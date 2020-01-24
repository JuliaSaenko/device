import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';
import scrollToElement from "scroll-to-element";
import moment from "moment";

import {errorClass, showClass, showSuccessMassage, toggleShowClass} from "./utils";
import urlUtils from "./utils";
import renderComments from "./comments";
import productSlider from "./product-slider";
import renderImages from "./render-images";
import raterJs from "rater-js";


let card;

let getPost = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch('./data/products.json', options);
    const json = await response.json();

    const element = json.find(el => el.id === id);

    return element
  } catch (err) {
    console.log('Error getting documents', err)
  }
};

let cardPage = {
  render : async () => {
    let request = urlUtils.parseRequestURL();
    card = await getPost(request.id);


    return `
      <div class="product-card-wrapper">
       <ul class="page__breadcrumbs breadcrumbs product-card__breadcrumbs">
          <li class="breadcrumbs__item"><a class="breadcrumbs__link"  href="/#/">Главная</a></li>
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/#/catalog">Каталог товаров</a></li>
          <li class="breadcrumbs__item">${card.name}</li>
       </ul>

       <div class="product-wrapper">
          <div class="product__gallery-container">
              <div class="product__gallery gallery-top swiper-container">
                 <ul class="product__slider swiper-wrapper">
                 </ul>
              </div>
              <div class="product__gallery-small swiper-container gallery-thumbs">
                 <ul class="product__slider-small swiper-wrapper">
                  </ul>
              </div>
          </div>
          <div class="product__info">
            <div class="product__heading">
              <h1 class="product__title">${card.name}</h1>
              <p class="product__art">Артикул: <span id="product-article">${card.art}</span></p>
              <div class="product__rating" id="rater">
              </div>
            </div>

            <div class="product__about">
              <div class="product__price-wrapper inner-order-content">
                 <p class="product__price price-title">Цена: <span id="productPrice">${card.price}</span><span class="product__currency"> грн</span> </p>
              </div>
              <button class="product__btn-buy main-buy-btn btn">🛒Купить</button>
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
                 бразование когерентно.
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

            </ul>
          </div>
      </div>
    </div>
        `
  }
  , after_render: async () => {
    let cardsInJSON;

    const response = await fetch('./data/products.json');
    let json = await response.json();

    if(localStorage.getItem('cards')) {
      cardsInJSON = localStorage.getItem('cards');
      json = JSON.parse(cardsInJSON);
    } else {
      cardsInJSON = JSON.stringify(json);
      localStorage.setItem('cards', cardsInJSON);
    }

    json = JSON.parse(cardsInJSON);
    const cardElement = json.find(el => el.id === card.id);

    const productRatingCount = parseInt(cardElement.rating);

    const productRating = raterJs({
        element: document.querySelector("#rater"),
        showToolTip: true,
        max: 5,
        starSize: 25,
        disableText: 'Thank you for your vote!',
        ratingText: '{rating}/{maxRating}',
        isBusyText: null,
        step: 0.1,
        reverse: false,
        readOnly: true,
        rating: productRatingCount,

      rateCallback:function rateCallback(rating, done) {
        productRating.setRating(rating);
        productRating.disable();
        done();
      }
    });

    const product = document.querySelector(`.product-card-wrapper`);
    const productDescriptionBtn = product.querySelector(`.product__brn--description`);
    const productDescription = product.querySelector(`.product__description`);
    const commentsList = document.querySelector(`.reviews__list`);
    const mainImages = document.querySelector(`.product__slider`);
    const smallImages = document.querySelector(`.product__slider-small`);
    const reviewBtn = document.querySelector(`.product__brn--review`);

    renderImages(cardElement.imgLarge, mainImages, 600);
    renderImages(cardElement.imgSmall, smallImages, 100);
    //productRating.enable();
    // console.log(cardElement.rating);
    //productRating.setRating(cardElement.rating);

    productDescriptionBtn.addEventListener(`click`, ()=> {
      toggleShowClass(productDescription);
    });
    productSlider();
    renderComments(cardElement.comments, commentsList);


    const reviewFormPopup = document.querySelector(`.review-modal`);
    if(reviewFormPopup) {
      const reviewForm = reviewFormPopup.querySelector(`.review-modal__form`);
      const reviewPopupOpenBtn = document.querySelector(`.product__review`);
      const reviewFormSubmitBtn = reviewForm.querySelector(`.review-modal__btn`);

      const reviewFormName = reviewForm.elements.reviewName;
      const reviewFormText = reviewForm.elements.reviewMessage;
      const reviewFormCloseBtn = reviewFormPopup.querySelector(`.modal__close`);



      const showReviewFormPopup = () => {
        reviewFormPopup.classList.add(showClass);
        disableBodyScroll(reviewFormPopup);
        reviewForm.reset();
        reviewFormName.focus();

        reviewFormCloseBtn.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          enableBodyScroll(reviewFormPopup);
          reviewFormPopup.classList.remove(showClass);
          reviewFormPopup.classList.remove(errorClass);
        });

      };

      const addNewComment = () => {
        const newComment = {};
        newComment.author = reviewFormName.value;
        newComment.time = moment().unix();
        newComment.text = reviewFormText.value;

        cardElement.comments.push(newComment);
      };

      reviewFormSubmitBtn.addEventListener(`click`, () => {
        if (formValidate(reviewForm)) {
          enableBodyScroll(reviewFormPopup);
          reviewFormPopup.classList.remove(showClass);

          addNewComment();

          json.forEach((element, index) => {
            if(element.id === cardElement.id) {
              json[index] = cardElement;
            }
          });

          const cardsInJSON = JSON.stringify(json);


          localStorage.setItem('cards', cardsInJSON);

          renderComments(cardElement.comments, commentsList);
          showSuccessMassage('Спасибо!', 'Ваш отзыв успешно отправлен!');

          reviewFormPopup.classList.remove(errorClass);
        } else {
          if(reviewFormPopup.classList.contains(errorClass)) {
            reviewFormPopup.classList.remove(errorClass);
            void reviewFormPopup.offsetWidth;
            reviewFormPopup.classList.add(errorClass);
          }
        }
      });

      const formValidate = (form) => {
        let valid = true;
        const formName = form.elements.reviewName;
        const formMessage = form.elements.reviewMessage;

        reviewFormPopup.classList.remove(errorClass);

        const nameValidate = /^[a-zA-Z-Яа-я0-9_]{3,}[a-zA-Z-Яа-я]+[0-9]*$/;

        if (!formName.value.match(nameValidate)) {
          reviewFormPopup.classList.add(errorClass);
          valid = false;
        }

        if(!formMessage.value) {
          reviewFormPopup.classList.add(errorClass);
          valid = false;
        }

        return valid
      };

      reviewPopupOpenBtn.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        showReviewFormPopup();
      });

    }

    reviewBtn.addEventListener(`click`, () => {
      scrollToElement(commentsList, {
        offset: 0,
        ease: 'out-expo',
        duration: 1500
      });
    });


    console.log(card);

  }
};

export default cardPage;
