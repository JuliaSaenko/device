"use strict"

export default () => {
  const dropDown = Array.from(document.querySelectorAll('.catalog-menu__link'));

  dropDown.forEach(item => {
      item.addEventListener('click', e => {
        const dataId = e.target.dataset.id;
        localStorage.setItem('categoryName', dataId);
      })
  })
  
//   dropDown.addEventListener('click', e => {
//       const dataId = e.target.dataset.id;
//       console.log(dataId);
//       //localStorage.setItem('categoryName', dataId);
//   })
  
}

 
       
   

