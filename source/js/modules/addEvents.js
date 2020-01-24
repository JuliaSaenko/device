'use strict';
//првесить слушатели циклом на коллецию
export let addEvents = function (elem, eventType, handlerFunc){
  if(elem){
    elem.forEach((item) => {
      item.addEventListener(eventType, handlerFunc);
    });
  }
}
