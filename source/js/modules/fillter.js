"use strict"

import { async } from "./polyfill";
import products from "./products";

export default () => {
    const productList = document.querySelector('.catalog__list');
    const priceFilter = document.querySelector('.sort__price');
    const categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    let filteredArray = [];
    let priceFlag = 0;
    const requestData = async () => {
        const products = await fetch(`./data/products.json`);
        if (!products.ok) {
            throw new Error(`Can not fetch ${products.url}`)
        }
        const data = await products.json();
        return { data }
    }
    function createProductCard() {
        filteredArray.forEach(item => {
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
        })
    }
    function checkFiltersForChecked(JSONData) {
        categoryFiltersArray.forEach(item => {
            if (item.checked) {
                JSONData.data.forEach(product => {
                    if (item.id === product.category) {
                        filteredArray.push(product);
                    }
                })
            }
        })
    }
    function sortArrayByPrice() {
        filteredArray.sort((a, b) => a.price - b.price);
    }
    function filterBycategory(JSONData){
        categoryFiltersArray.forEach(item => {
            item.addEventListener('click', e => {
                productList.innerHTML = '';

                if (categoryFiltersArray.every(item => !item.checked)) {
                    filteredArray = JSONData.data.slice();
                } else {
                    filteredArray = [];
                    checkFiltersForChecked(JSONData)
                }

                if(priceFlag === 1) {
                    sortArrayByPrice();
                }
                createProductCard();
            })
        })
    }
    function sortByPrice(JSONData){
        priceFilter.addEventListener('click', e => {
            productList.innerHTML = '';

            if (priceFlag === 0) {
                priceFlag = 1;
                sortArrayByPrice();

            } else if (priceFlag === 1) {
                priceFlag = 0
                filteredArray = [];

                if (categoryFiltersArray.every(item => !item.checked)) {
                    filteredArray = JSONData.data.slice();
                } else {
                    checkFiltersForChecked(JSONData);
                }
            }
            createProductCard();
        });
    }
    const showProducts = async () => {
        let JSONData = await requestData();
        filteredArray = JSONData.data.slice();
        filterBycategory(JSONData);
        sortByPrice(JSONData);
    }
    showProducts()
}
