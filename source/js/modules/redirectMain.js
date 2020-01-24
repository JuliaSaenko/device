"use strict"
export default () => {
    const subLink = document.querySelectorAll('.categories__link');
    subLink.forEach(item => {
        item.addEventListener('click', e => {
          const dataId = e.target.dataset.id;
          localStorage.setItem('categoryName', dataId);
        })
    })
}