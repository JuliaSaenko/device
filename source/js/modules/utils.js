import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';

export const showClass = `show`;
export const errorClass = `error`;

export const showSuccessMassage = (messageHeading, messageText) => {
    const successMessage = document.querySelector('.success-message');
    const successMessageCloseBtn = document.querySelector('.success-message-close');
    const successMessageHeading = successMessage.querySelector('.success-message-lead');
    const successMessageText = successMessage.querySelector('.success-message-text');

    successMessage.classList.add(showClass);
    disableBodyScroll(successMessage);
    successMessageHeading.textContent = messageHeading;
    successMessageText.textContent = messageText;

    successMessageCloseBtn.addEventListener('click', function () {
      enableBodyScroll(successMessage);
      successMessage.classList.remove(showClass);
    });
  };

const renderElement = (tag, className, text) => {
  let element = document.createElement(tag);
  element.setAttribute('class', className);
  element.textContent = text;

  return element
};

export const hideSection = (section) => {
  section.classList.remove(showClass);
};

export const showSection = (section) => {
  section.classList.add(showClass);
};

export const toggleShowClass = (section) => {
  section.classList.toggle(showClass);
};

const urlUtils = {
  // --------------------------------
  //  Parse a url and break it into resource, id and verb
  // --------------------------------
  parseRequestURL : () => {

    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/");
    let request = {
      resource    : null,
      id          : null,
      verb        : null
    }
    request.resource    = r[1];
    request.id          = r[2];
    request.verb        = r[3];

    return request
  }

  // --------------------------------
  //  Simple sleep implementation
  // --------------------------------
  , sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

let a = 5;

export default urlUtils;

export {renderElement};
