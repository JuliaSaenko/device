'use strict';
import {getLocalData} from "./cartUtiles";
import deleteFromCart from "./deleteFromCart";
import {totalPrice} from "./totalPrice";

export default () => {

    let cartArray = getLocalData('cartData');



    if (cartArray.length === 0 ){ //пустая ли корзина
      document.querySelector('.cart-popup>ul').innerHTML = `<div>Корзина пуста :(</div>`;
      document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
    } else {
      document.querySelector('.cart-popup>ul').innerHTML = "";

      if (document.querySelector('.cart-popup>ul')){
        cartArray = getLocalData('cartData');

        cartArray.forEach((item, index) => {
          document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          document.querySelector('.cart-popup>ul').innerHTML += `
          <li class="cart__product"  id_product_in_cart="${item.id}">
              <div class="cart__product-img">
                <img src="${item.src}" width="100" height="100">
              </div>
              <div class="cart__product-info">
                <div class="cart__product-name product-name">${item.name}</div>
                <div class="amount-of-produts">
                  <span class="amount">Количество:</span>
                  <span class="number-of-amount">${item.amount}</span>
                  <p class="cart__product-price">Цена: <span class="product-price">${item.price}</span></p>
                  <div class="delete_item">Убрать из корзины</div>
                </div>
              </div>
            </li>
        `;
        });

      }
    }
  deleteFromCart();


}
