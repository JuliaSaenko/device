// import {showSuccessMassage, showClass, errorClass} from './utils';
//
// export default () => {
//   const reviewFormPopup = document.querySelector(`.review-modal`);
//   if(reviewForm) {
//     const reviewForm = reviewFormPopup.querySelector(`.review-modal__form`);
//     const reviewPopupOpenBtn = document.querySelector(`.contacts__btn`);
//     const contactFormSubmitBtn = contactForm.querySelector(`.write-us__btn`);
//
//     const showContactFormPopup = () => {
//       const contactFormName = contactForm.elements.writeUsName;
//       const contactsFormCloseBtn = contactFormPopup.querySelector(`.modal__close`);
//
//       contactFormPopup.classList.add(showClass);
//       contactForm.reset();
//       contactFormName.focus();
//
//       contactsFormCloseBtn.addEventListener(`click`, (evt) => {
//         evt.preventDefault();
//         contactFormPopup.classList.remove(showClass);
//         contactFormPopup.classList.remove(errorClass);
//       });
//
//       contactFormSubmitBtn.addEventListener(`click`, () => {
//         if (formValidate(contactForm)) {
//           contactFormPopup.classList.remove(showClass);
//           showSuccessMassage('Ваше сообщение успешно отправлено!', 'Мы обязательно свяжимся с Вами в ближайшее время.');
//
//           contactFormPopup.classList.remove(errorClass);
//         } else {
//           if(contactFormPopup.classList.contains(errorClass)) {
//             contactFormPopup.classList.remove(errorClass);
//             void contactFormPopup.offsetWidth;
//             contactFormPopup.classList.add(errorClass);
//           }
//         }
//       });
//
//     };
//
//     const formValidate = (form) => {
//       let valid = true;
//       const formName = form.elements.writeUsName;
//       const formEmail = form.elements.writeUsEmail;
//
//       contactFormPopup.classList.remove(errorClass);
//
//       const nameValidate = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
//
//       if (!formName.value.match(nameValidate)) {
//         contactFormPopup.classList.add(errorClass);
//         valid = false;
//       }
//
//       if(!form.elements.contactMessage.value) {
//         contactFormPopup.classList.add(errorClass);
//         valid = false;
//       }
//
//       return valid
//     };
//
//     contactPopupOpenBtn.addEventListener(`click`, (evt) => {
//       evt.preventDefault();
//       showContactFormPopup();
//     });
//
//   }
//
// }
