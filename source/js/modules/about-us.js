import {showSuccessMassage, showClass, errorClass} from './utils';

export default () => {
  const contactFormPopup = document.querySelector(`.write-us`);
  if(contactFormPopup) {
    const contactForm = contactFormPopup.querySelector(`.write-us__form`);
    const contactPopupOpenBtn = document.querySelector(`.contacts__btn`);
    const contactFormSubmitBtn = contactForm.querySelector(`.write-us__btn`);

    const showContactFormPopup = () => {
      const contactFormName = contactForm.elements.writeUsName;
      const contactsFormCloseBtn = contactFormPopup.querySelector(`.modal__close`);

      contactFormPopup.classList.add(showClass);
      contactForm.reset();
      contactFormName.focus();

      contactsFormCloseBtn.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        contactFormPopup.classList.remove(showClass);
        contactFormPopup.classList.remove(errorClass);
      });

      contactFormSubmitBtn.addEventListener(`click`, () => {
        if (formValidate(contactForm)) {
          contactFormPopup.classList.remove(showClass);
          showSuccessMassage('Ваше сообщение успешно отправлено!', 'Мы обязательно свяжимся с Вами в ближайшее время.');

          contactFormPopup.classList.remove(errorClass);
        } else {
          if(contactFormPopup.classList.contains(errorClass)) {
            contactFormPopup.classList.remove(errorClass);
            contactFormPopup.classList.add(errorClass);
          }
        }
      });

    };

    const formValidate = (form) => {
      let valid = true;
      const formName = form.elements.writeUsName;
      const formEmail = form.elements.writeUsEmail;

      contactFormPopup.classList.remove(errorClass);

      const nameValidate = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
      const emailValidate = /^\w+[.!#$%&'*+/=?^_`{|}~-]*?\w*?@[a-z]+?\.[a-z]{2,4}$/;

      if (!formName.value.match(nameValidate)) {
        contactFormPopup.classList.add(errorClass);
        console.log(1);
        valid = false;
      }

      if (!formEmail.value.match(emailValidate)) {
        contactFormPopup.classList.add(errorClass);
        console.log(2);
        valid = false;
      }

      if(!form.elements.contactMessage.value) {
        contactFormPopup.classList.add(errorClass);
        console.log(3);
        valid = false;
      }

      return valid
    };

    contactPopupOpenBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      showContactFormPopup();
    });
  }

}