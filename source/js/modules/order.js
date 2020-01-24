'use strict';
import {errorClass} from "./utils";
import {getLocalData} from "./cartUtiles";
import deleteFromCart from "./deleteFromCart";
import {addEvents} from "./addEvents";
import {totalPrice} from "./totalPrice";

export default () => {

    let cartArray = getLocalData('cartData');



    // document.querySelector('.cart-popup>ul').innerHTML = "";
    cartArray.forEach(function (item){
      if (document.querySelector('.products-list-in-cart')){
        document.querySelector('.products-list-in-cart').innerHTML += `
              <li class="cart__product"  id_product_in_cart="${item.id}">
                  <div class="cart__product-img">
                    <img src="${item.src}" width="130" height="130">
                  </div>
                  <div class="cart__product-info">
                    <div class="cart__product-name product-name">${item.name}</div>
                    <div class="amount-of-produts">
                      <span class="amount">Количество: </span>
                      <button class="btnMinus">-</button>
                      <span class="number-of-amount">${item.amount}</span>
                      <button class="btnPlus">+</button>
                      <p class="cart__product-price">Цена: <span class="product-price">${item.price}</span></p>
                    </div>
                    <div class="delete_item">Убрать из корзины</div>
                  </div>
                </li>
          `;
        document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
      }

      deleteFromCart();
      let btnMin = document.querySelectorAll('.btnMinus');
      let btnPlus = document.querySelectorAll('.btnPlus');



      addEvents(btnPlus, 'click', (e)=>{
        let prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
        cartArray.forEach((item, index) => {
          if (item.id === prodCartId) {
            console.log(cartArray[index]);
            cartArray[index].amount += 1;
            e.target.closest('.cart__product').querySelector('.number-of-amount').innerHTML = cartArray[index].amount;
            localStorage.setItem('cartData', JSON.stringify(cartArray));
            document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          }
        });
      });

      addEvents(btnMin, 'click', (e)=>{
        let prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
        cartArray.forEach((item, index) => {
          if (item.id === prodCartId) {
            console.log(cartArray[index]);
            if( cartArray[index].amount === 1){
              return false;
            } else {
              cartArray[index].amount -= 1;
              e.target.closest('.cart__product').querySelector('.number-of-amount').innerHTML = cartArray[index].amount;
              localStorage.setItem('cartData', JSON.stringify(cartArray));
              document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
            }
          }
        });
      });

    });


    document.querySelector('#city').addEventListener('click', function () {
      if (document.querySelector('#city').value!=0){
        document.querySelector('#delivery-option').classList.remove('hide');
      }else{
        document.querySelector('#delivery-option').classList.add('hide');
      }
    });

    document.querySelector('#delivery-option').addEventListener('click', function () {
      if (document.querySelector('#delivery-option select').options.selectedIndex === 1){
        document.querySelector('#NP-number').classList.remove('hide');
        document.querySelector('#user-adress').classList.add('hide');
      }else if(document.querySelector('#delivery-option select').options.selectedIndex === 2){
        document.querySelector('#user-adress').classList.remove('hide');
        document.querySelector('#NP-number').classList.add('hide');
      }
      document.querySelector('#payment-option').classList.remove('hide');
    });

    document.querySelector('#payment-option').addEventListener('click', function () {
      if (document.querySelector('#payment-option select').options.selectedIndex === 2){
        document.querySelector('#credit-card').classList.remove('hide');
      }else {
        document.querySelector('#credit-card').classList.add('hide');
      }
    });


    let name = popupform.user_name;
    let tel = popupform.tel;
    let email = popupform.email;
    let city = popupform.city_select;
    let delivery = popupform.delivery;
    let adress = popupform.adress;
    let postNumber = popupform.number;
    let paymantOption = popupform.payment_option;



    // let cardPattern = new RegExp("^/.{1,4}/g){16}$");

    //тут прикольные пробелы в поле ввода номера карты
    let cardNumber = popupform.creditcard;
    cardNumber.addEventListener('input', function () {
      let digitst = this.value.replace(/[^\d]/g, '').substring(0,16);
      digitst = digitst.match(/.{1,4}/g).join(' ');
      this.value = digitst;
    });

    //валидация
    let orderValidation = function(){
      let res = true;
      let namePattern = new RegExp("^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\\040[А-ЯA-Z][\x27а-яa-z]{1,}(\\040[А-ЯA-Z][\x27а-яa-z]{1,})?$");
      let telPattern = new RegExp("^^([+]?[0-9\\s-\\(\\)]{3,25})*$");
      let emailPattern = new RegExp("^\\w+[.!#$%&'*+/=?^_`{|}~-]*?\\w*?@[a-z]+?\\.[a-z]{2,4}$");
      let NPnumber = new RegExp("^\\d{1,2}|300$");


      if(namePattern.test(name.value)) {
      name.classList.remove('alert')
      } else {
        name.classList.add('alert');
        res = false
        console.log(res);
      }

      if (telPattern.test(tel.value)){
        tel.classList.remove('alert');
      }else{
        res = false;
        console.log(res);
        tel.classList.add('alert');
      }

      if(emailPattern.test(email.value)){
        email.classList.remove('alert');
      }else{
        res = false;
        console.log(res);
        email.classList.add('alert');
      }

      if (city.value !== 0){
        document.querySelector('#city').classList.remove('alert');
      }else{
        res = false;
        console.log(res);
        document.querySelector('#city').classList.add('alert');
      }

      if(delivery.options.selectedIndex === 1){
        delivery.classList.remove('alert');
        if(NPnumber.test(postNumber.value)){
          postNumber.classList.remove('alert');
        } else {
          res = false;
          console.log(res);
          postNumber.classList.add('alert');
        }
      } else if(delivery.options.selectedIndex === 2){
        delivery.classList.remove('alert');
        if(adress.value){
         adress.classList.remove('alert');
        }else{
          adress.classList.add('alert');
          res = false;
          console.log(res);
        }
      } else {
        res = false;
        delivery.classList.add('alert');
      }
      if(paymantOption.options.selectedIndex === 1){
        paymantOption.classList.remove('alert');
      } else{
        paymantOption.classList.add('alert');
      }
      if (paymantOption.options.selectedIndex === 2){
        paymantOption.classList.remove('alert');
        if(cardNumber.value.length === 19){
          cardNumber.classList.remove('alert');
        }else{
          cardNumber.classList.add('alert');
          res = false;
          console.log(cardNumber.value.length);
        }
      }

      return res;
    }




    let confirmOrderBtn = document.querySelector('.confirm-order-btn');
    confirmOrderBtn.addEventListener('click', function(){
      if(orderValidation()){
        document.querySelector('.cart__product').classList.add('.remove-opacity');
        document.querySelector('.order-popup-container').innerHTML=`
        <div class="success-order-message">
            <div class="success-used-data">
                <img src="img/High-contrast-face-smile.svg" width="300" height="300">
                <div id="user-complete-order">
                </div>
                <h3>Спасибо!</h3>
                <p>Ваш заказ успешно офрмлен! Наш менеджер скоро с Вами свяжется =)</p>
                <a class="to-main-page btn" href="/#/">Вернуться на главную</a>
            </div>
        </div>
        `;
        cartArray.forEach(function (item){
          if (document.querySelector('#user-complete-order')){
            document.querySelector('#user-complete-order').innerHTML += `
              <li class="cart__product"  id_product_in_cart="${item.id}">
                  <div class="cart__product-img">
                    <img src="${item.src}" width="130" height="130">
                  </div>
                  <div class="cart__product-info">
                    <div class="cart__product-name product-name">${item.name}</div>
                    <div class="amount-of-produts">
                      <span class="amount">Количество: </span>
                      <span class="number-of-amount">${item.amount}</span>
                      <p class="cart__product-price">Цена: <span class="product-price">${item.price}</span></p>
                    </div>
                  </div>
                </li>
          `;
            document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
          }

        });
        localStorage.removeItem('cartData');
      }
    });






};
