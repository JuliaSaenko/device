"use strict"
export default () => {
    const requestData = async () => {
        const products = await fetch(`./data/products.json`);

        if (!products.ok) {
            throw new Error(`Can not fetch ${products.url}`)
        }

        const data = await products.json();

        return { data }
    }

    const productList = document.querySelector('.catalog__list');
    const categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    let filteredArray = [];
    categoryFiltersArray.forEach(item => {
        item.addEventListener('click', e => {
            productList.innerHTML = ``;
            categoryFiltersArray.forEach(item => {
                if (item.checked) {
                    requestData()
                        .then(response => {
                            response.data.forEach(product => {
                                if (item.id === product.category) {
                                    filteredArray.push(product);
                                    productList.innerHTML += `
                                    <li class="catalog__item" data-id = "${product.category}">
                                        <a class="catalog__link" href="#">
                                            <h3 class="catalog__title">${product.name}</h3>
                                        </a>
                                        <p class="catalog__price">${product.price} грн</p>
                                        <div class="catalog__wrapper">
                                            <img class="catalog__image" src="${product.img}">
                                            <p class="catalog__actions">
                                                <button class="catalog__btn btn" type="button">В корзину</button>
                                                <button class="catalog__compare-btn" type="button">Добавить к сравнению</button>
                                            </p>
                                        </div>
                                    </li>
                                   `;
                                }
                            })
                        })
                
                }
            })
        })
    })
  
    
    //////////////////////
    const priceFilter = document.querySelector('.sort__price');
    priceFilter.addEventListener('click', e => {
        filteredArray.sort(function(a, b){
            return a.price - b.price;            
        })
        console.log(filteredArray);
        
    });
    
}