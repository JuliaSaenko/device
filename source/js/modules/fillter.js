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


    const categoryFilter = document.querySelector('.filter__category');
    const productList = document.querySelector('.catalog__list');

    categoryFilter.addEventListener('click', e => {
        const id = e.target.id;
        productList.innerHTML = '';
        requestData()
            .then(response => {
                response.data.forEach(item => {
                    if(item.category === id) {
                        productList.innerHTML += `
                            <li class="catalog__item">
                                <a class="catalog__link" href="#">
                                    <h3 class="catalog__title">${item.name}</h3>
                                </a>
                                <p class="catalog__price">${item.price} грн</p>
                                <div class="catalog__wrapper">
                                    <img class="catalog__image" src="${item.img}">
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
    })
}        
