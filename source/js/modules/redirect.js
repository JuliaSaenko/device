"use strict"

export default () => {
  const dropDown = Array.from(document.querySelectorAll('.catalog-menu__link'));
  const mainLink = document.querySelector('.site-menu__link--dropdown');
  
  mainLink.addEventListener('click', () =>{
    localStorage.removeItem('categoryName');
  })
  
  dropDown.forEach(item => {
      item.addEventListener('click', e => {
        const dataId = e.target.dataset.id;
        localStorage.setItem('categoryName', dataId);
      })
  })


}

 
       
   

