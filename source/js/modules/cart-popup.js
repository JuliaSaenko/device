import {showSection, hideSection} from './utils';
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';

export default () => {
    const cartPopupLink = document.querySelector(`.user-menu__item--cart`);
    const cartPopup = document.querySelector(`.cart-popup`);
    const cartPopupCloseBtn = cartPopup.querySelector(`.cart__close`);

  cartPopupLink.addEventListener(`click`, () => {
    disableBodyScroll(cartPopup);
    showSection(cartPopup);
  });
  cartPopupCloseBtn.addEventListener(`click`, () => {
    enableBodyScroll(cartPopup);
    hideSection(cartPopup);
  });
}
