'use strict';

import {errorClass} from "./utils";

export default () => {
  (function() {

    // if($('.city').val()!=0){
    //    $('#delivery-option').removeClass('hide');
    // }

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
    let postNumber = popupform.number;
    let paymantOption = popupform.payment_option;



    // let cardPattern = new RegExp("^[0-9]{16}$");

    //тут прикольные пробелы в инпуте номера карты
    let cardNumber = popupform.creditcard;
    cardNumber.addEventListener('input', function () {
      let digitst = this.value.replace(/[^\d]/g, '').substring(0,16);
      digitst = digitst.match(/.{1,4}/g).join(' ');
      this.value = digitst;
    });

    //валидация
    let orderValidation = function(){
      let res = true;
      // let namePattern = new RegExp("^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$");
      let telPattern = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$");
      let emailPattern = new RegExp("^\\w+[.!#$%&'*+/=?^_`{|}~-]*?\\w*?@[a-z]+?\\.[a-z]{2,4}$");
      let NPnumber = new RegExp("^\\d{1,2}|300$");
      let cardPattern = new RegExp("^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$");

      if(name.value) {
        name.classList.remove('alert');
      } else {
        name.classList.add('alert');
        res = false;
      }

      if (telPattern.test(tel.value)){
        tel.classList.remove('alert');
      }else{
        res = false;
        tel.classList.add('alert');
      }

      if(emailPattern.test(email.value)){
        email.classList.remove('alert');
      }else{
        res = false;
        email.classList.add('alert');
      }

      if (city.value !== 0){
        document.querySelector('#city').classList.remove('alert');
      }else{
        res = false;
        document.querySelector('#city').classList.add('alert');
      }

      if(delivery.options.selectedIndex === 1){
        delivery.classList.remove('alert');
        if(NPnumber.test(postNumber.value)){
          postNumber.classList.remove('alert');
        } else {
          res = false;
          postNumber.classList.add('alert');
        }
      } else if(delivery.options.selectedIndex === 2){
        delivery.classList.remove('alert');
      } else {
        res = false;
        delivery.classList.add('alert');
      }

      if(paymantOption.options.selectedIndex === 1 || (paymantOption.options.selectedIndex === 2 && cardPattern.test(cardNumber.value))){
        paymantOption.classList.remove('alert');
      }else{
        paymantOption.classList.add('alert');
        res = false;
      }

      if (!cardNumber.value){
        cardNumber.classList.add('alert');
        res = false;
      }else{
        cardNumber.classList.remove('alert');
      }

      return res;
    }




    let confirmOrderBtn = document.querySelector('.confirm-order-btn');
    confirmOrderBtn.addEventListener('click', function(){
      if(orderValidation()){

        document.querySelector('.order-popup-container').innerHTML=`
        <div class="success-order-message">
            <div class="success-used-data">
                <img src="img/High-contrast-face-smile.svg" width="560" height="560">
                <h3>Спасибо!</h3>
                <p>Ваш заказ успешно офрмлен! Наш менеджер скоро с Вами свяжется =)</p>
                <a class="to-main-page btn" href="/#/">Вернуться на главную</a>
            </div>
        </div>
        `;
      }
    });




  }());
};
