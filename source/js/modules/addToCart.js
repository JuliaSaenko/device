'use strict';
import miniCartRender from "./miniCartRender"; //отрисовка миникорзины
import  {getLocalData} from "./cartUtiles";
import  {getProductProperties} from "./cartUtiles"; //функция конструктор
import  {addEvents} from "./addEvents";
import deleteFromCart from "./deleteFromCart";
import {totalPrice} from "./totalPrice";

export default () => {

    let cartArray = getLocalData('cartData');

    let allProducts = document.querySelectorAll('.addToCartBtn');  //кнопка в корзину

    // функция - повесить слушатель на коллекцию
    addEvents(allProducts, 'click', (e) =>{
      addToCart(e);
    });



   // проверки на добавление товара
   function  addToCart(e) {

      let prodCartId = e.target.closest('.catalog__item').querySelector('.catalog__link').getAttribute('data-id');
      let prodCartName = e.target.closest('.catalog__item').querySelector('.catalog__title').innerHTML;
      let prodCardPrice = e.target.closest('.catalog__item').querySelector('.catalog__price').innerHTML;
      let prodCardImg = e.target.closest('.catalog__item').querySelector('.catalog__image').src;
      let prodCardAmount = 1;


      let cartItemInfo = new getProductProperties(prodCartId, prodCartName, prodCardPrice, prodCardImg, prodCardAmount); //новый объект
      let i = 0;
      if (cartArray.length === 0) {
        cartArray.push(cartItemInfo);

        localStorage.setItem('cartData', JSON.stringify(cartArray));
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
        deleteFromCart();
      } else if (cartArray.length > 0) {
        let flag = true;
        cartArray.forEach((item, index) => {
          if (item.id === cartItemInfo.id) {
            i = index;
            flag = false;
            // console.log(i);
          }
        });
        if (flag) {
          cartArray.push(cartItemInfo);
        } else {
          cartArray[i].amount+=1;
        }
        localStorage.setItem('cartData', JSON.stringify(cartArray));
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
      }
     miniCartRender();
    }



}






// function fillCart(cartItemInfo) {
//   document.querySelector('.cart-popup>ul').innerHTML = "";
//   cartArray.forEach((item) =>{
//     document.querySelector('.cart-popup>ul').innerHTML += `
//       <li class="cart__product" id_product_in_cart="cartId${cartItemInfo.id}>
//           <div class="cart__product-img">
//             <img src="${cartItemInfo.src}" width="100" height="100">
//           </div>
//           <div class="cart__product-info">
//             <div class="cart__product-name product-name">${cartItemInfo.name}</div>
//             <div class="amount-of-produts">
//               <span class="amount">Количество:</span>
//               <span class="number-of-amount">${cartItemInfo.amount}</span>
//               <p class="cart__product-price">Цена: <span class="product-price">${cartItemInfo.price}</span></p>
//               <div class="delete_item">Убрать из корзины</div>
//             </div>
//           </div>
//         </li>
//     `;
//   });
//
// }
