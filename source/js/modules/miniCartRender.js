'use strict';

export default () => {

  let cartArray = JSON.parse(localStorage.getItem('cartData'));
  if (cartArray === null){
    document.querySelector('.cart-popup>ul').innerHTML = `<div>Корзина пуста :(</div>`
  } else{
    if (document.querySelector('.cart-popup>ul')){
      document.querySelector('.cart-popup>ul').innerHTML = ``;
      cartArray.forEach(function (item) {
        document.querySelector('.cart-popup>ul').innerHTML += `
          <li class="cart__product">
              <div class="cart__product-img">
                <img src="${item.src}" width="100" height="100">
              </div>
              <div class="cart__product-info">
                <div class="cart__product-name product-name">${item.name}</div>
                <div class="amount-of-produts">
                  <span class="amount">Количество:</span>
                  <span class="number-of-amount">${item.col}</span>
                  <p class="cart__product-price">Цена: <span class="product-price">${item.price}</span></p>
                  <div class="delete_item">Убрать из корзины</div>
                </div>
              </div>
            </li>
        `;
      });
    }
  }




}
