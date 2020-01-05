import scrollToElement from 'scroll-to-element';

export default () => {
  const services = document.querySelector(`.services`);
  if(services) {
    const buttonDelivery = services.querySelector(`.services__btn--delivery`);
    const buttonWarranty = services.querySelector(`.services__btn--warranty`);
    const buttonCredit = services.querySelector(`.services__btn--credit`);

    const sectionDelivery = services.querySelector(`.services__item--delivery`);
    const sectionWarranty = services.querySelector(`.services__item--warranty`);
    const sectionCredit = services.querySelector(`.services__item--credit`);

    const navDelivery = document.querySelector(`.site-menu__link--delivery`);
    const navWarranty = document.querySelector(`.site-menu__link--warranty`);

    const classHidden = `services__item--hidden`;
    const classActive = `services__btn--active`;

    function servicesSwitcher(options) {
      options.activateCategory.classList.remove(classHidden);
      options.hideCategories.forEach((category) => {
        category.classList.add(classHidden);
      });
      options.deactivateButtons.forEach((button) => {
        button.classList.remove(classActive);
      });
      options.activateButton.classList.add(classActive);
    }

    buttonDelivery.addEventListener(`click`, () => {
      servicesSwitcher({
        activateButton: buttonDelivery,
        activateCategory: sectionDelivery,
        hideCategories: [sectionWarranty, sectionCredit],
        deactivateButtons: [buttonWarranty, buttonCredit],
      });
    });

    buttonWarranty.addEventListener(`click`, () => {
      servicesSwitcher({
        activateButton: buttonWarranty,
        activateCategory: sectionWarranty,
        hideCategories: [sectionDelivery, sectionCredit],
        deactivateButtons: [buttonDelivery, buttonCredit],
      });
    });

    buttonCredit.addEventListener(`click`, () => {
      servicesSwitcher({
        activateButton: buttonCredit,
        activateCategory: sectionCredit,
        hideCategories: [sectionDelivery, sectionWarranty],
        deactivateButtons: [buttonDelivery, buttonWarranty],
      });
    });

    navDelivery.addEventListener(`click`, () => {
      scrollToElement('.services', {
        offset: 0,
        ease: 'out-expo',
        duration: 1500
      });
      servicesSwitcher({
        activateButton: buttonDelivery,
        activateCategory: sectionDelivery,
        hideCategories: [sectionWarranty, sectionCredit],
        deactivateButtons: [buttonWarranty, buttonCredit],
      });
    });

    navWarranty.addEventListener(`click`, () => {
      scrollToElement('.services', {
        offset: 0,
        ease: 'out-expo',
        duration: 1500
      });
      servicesSwitcher({
        activateButton: buttonWarranty,
        activateCategory: sectionWarranty,
        hideCategories: [sectionDelivery, sectionCredit],
        deactivateButtons: [buttonDelivery, buttonCredit],
      });
    });

  }
};

