"use strict"

export default () => {
    const category = localStorage.getItem('categoryName');
    const categoryFilter = Array.from(document.querySelectorAll('.category__filter'));
    const catalog = document.querySelector('.catalog__list')
    // let event = new Event("check", { bubbles: true });
    categoryFilter.forEach(item => {
        if (item.id === category) {
          item.click();
        }        
    })



//    addEventListener('click', function(e){
//         console.log(e.target);
//         e.target.click();
        
//     })
//     let event = new Event("click", { bubbles: true });
//     //categoryFilter[1].dispatchEvent(event);
    
//     //const findElement = function () {
//         categoryFilter.forEach(item => {
//             if (item.id === category) {
//                 item.dispatchEvent(event);
//             }
//         })
    //}
   // console.log(findElement());
    
    
    // findElement().addEventListener('check', function (e) {
    //     findElement().click();
    // })
   // document.dispatchEvent(event);
    // let event = new Event("click");
    // elem.dispatchEvent(event);





}