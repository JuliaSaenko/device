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

