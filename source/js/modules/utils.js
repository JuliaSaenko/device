export const showClass = `show`;
export const errorClass = `error`;

export const showSuccessMassage = (messageHeading, messageText) => {
    const successMessage = document.querySelector('.success-message');
    const successMessageCloseBtn = document.querySelector('.success-message-close');
    const successMessageHeading = successMessage.querySelector('.success-message-lead');
    const successMessageText = successMessage.querySelector('.success-message-text');

    successMessage.classList.add(showClass);
    successMessageHeading.textContent = messageHeading;
    successMessageText.textContent = messageText;

    successMessageCloseBtn.addEventListener('click', function () {
      successMessage.classList.remove(showClass);
    });
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

export default urlUtils;
