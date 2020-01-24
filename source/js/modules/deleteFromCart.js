'use strict';
import  {getLocalData} from "./cartUtiles";
import  {addEvents} from "./addEvents";
import {totalPrice} from "./totalPrice";

export default () => {

  let cartArray = getLocalData('cartData');

  let deleteFromCartBtn = document.querySelectorAll('.delete_item');

  // функция - повесить слушатель на коллекцию
  addEvents(deleteFromCartBtn, 'click', (e) =>{
    deleteFunc(e);
  });

  function  deleteFunc(e){
    let i=0, flag = false;
    let prodCartId = e.target.closest('.cart__product').getAttribute('id_product_in_cart');
    cartArray.forEach((item, index)=>{
      if (item.id === prodCartId) {
        i = index;
        flag=true;
      }
    });
    if (flag){
      console.log(i);
      cartArray.splice(i, 1);
      console.log(cartArray);
      e.target.closest('.cart__product').remove();

    }
    // if(cartArray.length === 0){
    //   localStorage.removeItem('cartData');
    // }
    localStorage.setItem('cartData', JSON.stringify(cartArray));
    document.querySelector('.finalPrice').innerHTML = totalPrice(cartArray);
  }
}
