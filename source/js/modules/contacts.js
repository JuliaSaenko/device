import scrollToElement from 'scroll-to-element';

export default () => {
  const contacts = document.querySelector(`.contacts`);

  if(contacts) {
    const navContacts = document.querySelector(`.site-menu__link--contacts`);

    navContacts.addEventListener(`click`, () => {
      scrollToElement(contacts, {
        offset: 0,
        ease: 'out-expo',
        duration: 1500
      });
    });
  }
};
