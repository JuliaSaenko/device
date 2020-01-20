//import * as fs from 'fs';
//const jsonObject = require("products.json");

//const fs = require('fs');

//import fs from '../../fs';
import moment from "moment";
import renderComments from "./comments";
import {errorClass, showClass, showSuccessMassage, toggleShowClass} from "./utils";
import urlUtils from "./utils";
import productSlider from "./product-slider";
//import {showProductDescription} from "./description";

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
    //console.log(json);

    const element = json.find(el => el.id === id);

    return element
  } catch (err) {
    console.log('Error getting documents', err)
  }
};

let cardPage = {
  render : async () => {
    let request = urlUtils.parseRequestURL();
    console.log(request);
    card = await getPost(request.id);
    //console.log(request.id);
    //console.log(card);

    return /*html*/`
      <div class="product-card-wrapper">
       <ul class="page__breadcrumbs breadcrumbs product-card__breadcrumbs">
          <li class="breadcrumbs__item"><a class="breadcrumbs__link"  href="/#/">Главная</a></li>
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/#/catalog">Каталог товаров</a></li>
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="#">Моноподы для селфи</a></li> <!-- Добавить обработчик фильтрации -->
          <li class="breadcrumbs__item">${card.name}</li>
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
              <h1 class="product__title">${card.name}</h1>
              <p class="product__art">Артикул: <span id="product-article">${card.art}</span></p>
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
                 <p class="product__price price-title">Цена: <span id="productPrice">${card.price}</span></p>
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

    console.log(json);

    if(localStorage.getItem('cards')) {
      cardsInJSON = localStorage.getItem('cards');
      json = JSON.parse(cardsInJSON);
    } else {
      cardsInJSON = JSON.stringify(json);
      localStorage.setItem('cards', cardsInJSON);
      console.log(json);
    }

    json = JSON.parse(cardsInJSON);
    const cardElement = json.find(el => el.id === card.id);

    console.log(json);
    console.log(card);

    const product = document.querySelector(`.product-card-wrapper`);
    const productDescriptionBtn = product.querySelector(`.product__brn--description`);
    const productDescription = product.querySelector(`.product__description`);
    const commentsList = document.querySelector(`.reviews__list`);

    productDescriptionBtn.addEventListener(`click`, ()=> {
      toggleShowClass(productDescription);
    });
    productSlider();
    renderComments(cardElement.comments, commentsList);


    // json.findIndex(x => x.id == card.id);
    // json[foundIndex] = card;

    // json.forEach((element, index) => {
    //   if(element.id === card.id) {
    //     json[index] = card;
    //   }
    // });

    console.log(cardElement.comments);

    const reviewFormPopup = document.querySelector(`.review-modal`);
    if(reviewFormPopup) {
      const reviewForm = reviewFormPopup.querySelector(`.review-modal__form`);
      const reviewPopupOpenBtn = document.querySelector(`.product__review`);
      const reviewFormSubmitBtn = reviewForm.querySelector(`.review-modal__btn`);

      const showReviewFormPopup = () => {
        const reviewFormName = reviewForm.elements.reviewName;
        const reviewFormText = reviewForm.elements.reviewMessage;
        const reviewFormCloseBtn = reviewFormPopup.querySelector(`.modal__close`);

        reviewFormPopup.classList.add(showClass);
        reviewForm.reset();
        reviewFormName.focus();

        reviewFormCloseBtn.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          reviewFormPopup.classList.remove(showClass);
          reviewFormPopup.classList.remove(errorClass);
        });

        reviewFormSubmitBtn.addEventListener(`click`, () => {
          if (formValidate(reviewForm)) {
            reviewFormPopup.classList.remove(showClass);
            const newComment = {};
            newComment.author = reviewFormName.value;
            newComment.time = moment();
            newComment.text = reviewFormText.value;

            cardElement.comments.push(newComment);

            console.log(cardElement);

            json.forEach((element, index) => {
              if(element.id === cardElement.id) {
                json[index] = cardElement;
              }
            });

            console.log(json);

            const cardsInJSON = JSON.stringify(json);

            localStorage.setItem('cards', cardsInJSON);

            renderComments(cardElement.comments, commentsList);


            showSuccessMassage('Ваш отзыв успешно отправлен!', 'Спасибо!');

            reviewFormPopup.classList.remove(errorClass);
          } else {
            if(reviewFormPopup.classList.contains(errorClass)) {
              reviewFormPopup.classList.remove(errorClass);
              void reviewFormPopup.offsetWidth;
              reviewFormPopup.classList.add(errorClass);
            }
          }
        });

      };

      const formValidate = (form) => {
        let valid = true;
        const formName = form.elements.reviewName;
        const formMessage = form.elements.reviewMessage;

        reviewFormPopup.classList.remove(errorClass);

        const nameValidate = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/; //// изменить

        if (!formName.value) {
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
    //
    // fs.writeFile('data/products.json', cardsInJSON, 'utf8', (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });

    console.log(card);

    //json = JSON.stringify();

  }
};

export default cardPage;

// let cardPage = {
//   render : async () => {
//     let view = `
//            <div class="product-card-wrapper">
//    <ul class="page__breadcrumbs breadcrumbs product-card__breadcrumbs">
//      <li class="breadcrumbs__item"><a class="breadcrumbs__link"  href="/#/main">Главная</a></li>
//      <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/#/catalog">Каталог товаров</a></li>
//      <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="#">Моноподы для селфи</a></li> <!-- Добавить обработчик фильтрации -->
//      <li class="breadcrumbs__item">Beike QZSD Q999H</li>
//     </ul>
//
//   <div class="product-wrapper">
//     <button type="button" class="product__close btn--close"><span class="visually-hidden">закрыть</span></button>
//     <div class="product__gallery-container">
//        <div class="product__gallery gallery-top swiper-container">
//           <ul class="product__slider swiper-wrapper">
//             <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-l.jpg" width="600" height="600"></li>
//             <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-2-l.jpg" width="600" height="600"></li>
//             <li class="product__slide swiper-slide"><img src="img/content/selfie-sticks/photo1-3-l.jpg" width="600" height="600"></li>
//           </ul>
//        </div>
//        <div class="product__gallery-small swiper-container gallery-thumbs">
//           <ul class="product__slider-small swiper-wrapper">
//             <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-s.jpg" width="100" height="100"></li>
//             <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-2-s.jpg" width="100" height="100"></li>
//             <li class="product__slide-small swiper-slide"><img src="img/content/selfie-sticks/photo1-3-s.jpg" width="100" height="100"></li>
//           </ul>
//         </div>
//       </div>
//       <div class="product__info">
//         <div class="product__heading">
//           <h1 class="product__title">Монопод Beike QZSD Q999H</h1>
//           <p class="product__art">Артикул: <span id="product-article">#12345</span></p>
//           <div id="reviewStars-input">
//             <input class="stars-rait" type="checkbox" id="st1" value="1">
//             <label for="st1"></label>
//             <input class="stars-rait" type="checkbox" id="st2" value="2">
//             <label for="st2"></label>
//             <input class="stars-rait" type="checkbox" id="st3" value="3">
//             <label for="st3"></label>
//             <input class="stars-rait" type="checkbox" id="st4" value="4">
//             <label for="st4"></label>
//             <input class="stars-rait" type="checkbox" id="st5" value="5">
//             <label for="st5"></label>
//           </div>
//         </div>
//
//         <div class="product__about">
//           <div class="product__price-wrapper inner-order-content">
//             <p class="product__price price-title">Цена: <span id="productPrice">$ 1000</span></p>
//           </div>
//           <button class="product__btn-buy main-buy-btn btn">🛒Купить</button>
//           <div class="product__delivery-info">
//             <p>Осталось в наличии: 2</p>
//           </div>
//         </div>
//         <div class="product__brns">
//           <button class="product__brn product__brn--description btn">Описание</button>
//           <button class="product__brn product__brn--review btn">Отзывы</button>
//         </div>
//         <div class="product__review-wrapper">
//           <a class="product__review" id="feedback">Оставить отзыв</a>
//         </div>
//       </div>
//      <div class="product__description">
//         <h2 class="product__description-title">Расширяющийся гидродинамический удар</h2>
//         <p class="product__description-text">
//           Призма эксперментально верифицируема. В соответствии с принципом неопределенности, плазменное
//           образование когерентно.
//           Вещество, вследствие квантового характера явления, зеркально. Многочисленные расчеты предсказывают, а
//           эксперименты подтверждают, что гомогенная среда зеркально вращает квантовый фотон.
//         </p>
//         <p class="product__description-text">
//           Галактика сжимает фотон.
//           Как легко получить из самых общих соображений, поверхность изотермично искажает взры
//           Возмущение плотности, как того требуют законы термодинамики, растягивает фотон. Мишень, в рамках
//           ограничений классической механики, трансформирует поток при
//           любом агрегатном состоянии среды взаимодействия.
//         </p>
//       </div>
//       <div class="products__reviews reviews">
//        <ul class="reviews__list">
//
//       </ul>
//       </div>
//   </div>
// </div>
//         `;
//     return view
//   }
//   , after_render: async () => {
//     const product = document.querySelector(`.product-card-wrapper`);
//     const productDescriptionBtn = product.querySelector(`.product__brn--description`);
//     const productDescription = product.querySelector(`.product__description`);
//
//     productDescriptionBtn.addEventListener(`click`, ()=> {
//       toggleShowClass(productDescription);
//     });
//     productSlider();
//     comments();
//   }
// };
//
// export default cardPage;
