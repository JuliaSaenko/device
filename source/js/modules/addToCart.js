'use strict';


export default () => {

  (function(){


    //булировать инфу в новый объект для корзины
    function getProductProperties(name, price, img, col) {
      this.name = name;
      this.price = price;
      this.src = img;
      this.col = col;
    }


    // //взять из LocalStorage
    // function getCartData(cartArray){
    //   return JSON.parse(localStorage.getItem('cart'));
    // }
    //
    // //запись LocalStorage
    // function setCartData(data){
    //   return  localStorage.setItem('cart', JSON.stringify(data));
    // }


    // function forLocalStorage(data, value){
    //   if (localStorage.getItem(data) === null){
    //     localStorage.setItem(data, JSON.stringify(value))
    //   }
    //   return JSON.parse(localStorage.getItem(data));
    // }



    let cartArray = JSON.parse(localStorage.getItem('cartData'));
    if (!cartArray){
      cartArray = [];
    }

    // document.querySelector('.products-list-in-cart').innerHTML = "";




    //слушатель на кнопку
    function addEvent(elem, eventType, handler){
      if(elem.addEventListener){
        elem.addEventListener(eventType, handler, false);
      }
    }






    let allProduts = document.querySelectorAll('.addToCartBtn');
    if(allProduts) {
      allProduts.forEach((elem)=>{
        addEvent(elem, 'click', function (e) {
          addToCart(e);
        });
      });
    }




    function addToCart(e){
      // console.log(e.target);
      // e.target.class.add();
      // e.target.disabled = true; // блокируем кнопку

      let prodCartName =  e.target.closest('.catalog__item').querySelector('.catalog__title').innerHTML;
      let prodCardPrice =  e.target.closest('.catalog__item').querySelector('.catalog__price').innerHTML;
      let prodCardImg = e.target.closest('.catalog__item').querySelector('.catalog__image').src;

      let cartData = new getProductProperties(prodCartName, prodCardPrice, prodCardImg, 1);
      console.log(cartData);
      if(cartArray.includes(cartData.hasOwnProperty(name === prodCartName))){
        cartArray.includes(cartData.col +1);
      } else {
        cartArray.push(cartData);
        localStorage.setItem('cartData', JSON.stringify(cartArray));
        document.querySelector('.cart-popup>ul').innerHTML += ` 
          <li class="cart__product">
              <div class="cart__product-img">
                <img src="${prodCardImg}" width="100" height="100">
              </div>
              <div class="cart__product-info">
                <div class="cart__product-name product-name">${prodCartName}</div>
                <div class="amount-of-produts">
                  <span class="amount">Количество:</span>
                  <span class="number-of-amount">${cartData.col}</span>
                  <p class="cart__product-price">Цена: <span class="product-price">${prodCardPrice}</span></p>
                  <div class="delete_item">Убрать из корзины</div>
                </div>
              </div>
            </li>
        `;
      }

    }

    // console.log(document.querySelector('.products-list-in-cart'));


  })();


}
