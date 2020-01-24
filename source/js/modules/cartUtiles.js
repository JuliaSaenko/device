'use strict';
//берем массив данных. если их не то пустой массив
export let getLocalData = function (dataName) {
    if (!JSON.parse(localStorage.getItem(dataName))){
      return [];
    } else {
      return JSON.parse(localStorage.getItem(dataName));
    }
}

//дублировать инфу в новый объект для корзины
export class getProductProperties{
  constructor(id, name, price, src, amount){
    this.id = id;
    this.name = name;
    this.price = parseInt(price);
    this.src = src;
    this.amount = amount;
  }
}
