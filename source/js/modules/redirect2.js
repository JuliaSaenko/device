"use strict"

export default () => {
    const category = localStorage.getItem('categoryName');
    const categoryFilter = Array.from(document.querySelectorAll('.category__filter'));

    categoryFilter.forEach(item => {
        if (item.id === category) {
          item.click();
        }        
    })
}