'use strict';
//првесить слушатели циклом на коллецию
export let totalPrice = function (cartData){
  let finalPrice = 0;
  if(cartData.length === 0){
    return finalPrice;
  } else {
    cartData.forEach((productObj, index) => {
      for (let key in productObj){
        if (key === 'price'){
          if (productObj.amount >= 1) {
            finalPrice += (productObj.amount*productObj.price);
          }
        }
      }
    });
    return finalPrice;
  }

}

