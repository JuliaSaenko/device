import {showSection, hideSection} from './utils';

export default () => {
    const cartPopupLink = document.querySelector(`.user-menu__item--cart`);
    const cartPopup = document.querySelector(`.cart-popup`);
    const cartPopupCloseBtn = cartPopup.querySelector(`.cart__close`);

  cartPopupLink.addEventListener(`click`, () => {
    showSection(cartPopup);
  });
  cartPopupCloseBtn.addEventListener(`click`, () => {
    hideSection(cartPopup);
  });
}
