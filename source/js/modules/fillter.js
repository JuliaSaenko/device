"use strict"

import { async, values } from "./polyfill";
import products from "./products";

export default () => {
    const productList = document.querySelector('.catalog__list');
    const priceFilter = document.querySelector('.sort__price');
    const categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    let filteredArray = [];
    let brandFilteredArray = [];
    let priceFlag = 0;
    const requestData = async (path) => {
        const products = await fetch(path);
        if (!products.ok) {
            throw new Error(`Can not fetch ${products.url}`)
        }
        const data = await products.json();
        return { data }
    }
    function filterByBrand() {
        filteredArray.filter(function (item) {
            return item.brand === brand.id
        })
    }
    //////////

      //////////





    function addListenerOnBrands() {
        const brandFiltersArray = Array.from(document.querySelectorAll('.brand__filter'));
        brandFiltersArray.forEach(brand => {
            brand.addEventListener('click', e => {
                productList.innerHTML = '';


                if (brand.checked) {
                    brandFilteredArray.push(...filteredArray.filter(item => item.brand === brand.id));
                } else if (!brand.checked) {
                   brandFilteredArray.forEach(item => {
                      
                       if(brand.id === item.brand) {
                            let index = brandFilteredArray.indexOf(item);
                            console.log(index);
                            brandFilteredArray.splice(index, 1);
                            
                            
                            
                           
                            //remove(brandFilteredArray, index);
                            //console.log(index);
                            // brandFilteredArray.splice(index, 1);
                            
                         
                       }
                      // brandFilteredArray.splice(index, 1);
                      
                       
                   })
                }
                createProductCard(brandFilteredArray);
            })
        })
    }
    async function createBrandFilter() {
        const brandBlock = document.getElementById('brand');
        const brands = await requestData(`./data/categories.json`);
        brandBlock.innerHTML = '';
        brandBlock.innerHTML += `
            <fieldset class="filter__section">
                <legend class="filter__section-title">Бренд</legend>
                    <ul class="filter__options filter__brand">
                    </ul>
                </legend>
            </fieldset>
        `;
        const brandList = document.querySelector('.filter__brand');
        const brandNames = Object.keys(brands.data);
        let brandArray = [];

        filteredArray.forEach(item => {
            if (brandNames.includes(item.category)) {
                brandArray.push(...brands.data[item.category]);
            }
        })
        brandArray = [... new Set(brandArray)];

        brandList.innerHTML = '';
        brandArray.forEach(item => {
            brandList.innerHTML += `
            <li>
                <input class="brand__filter filter__option visually-hidden" id="${item}" type="checkbox" name="${item}">
                <label class="filter__option-label filter__option-label--check" for="${item}">${item}</label>
            </li>
        `;
        })
        addListenerOnBrands();
    }
    function hideBrandFilter() {
        const brandFilter = document.getElementById('brand');
        brandFilter.innerHTML = '';
    }
    function createProductCard(array) {
        array.forEach(item => {
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
    function filterBycategory(JSONData) {
        categoryFiltersArray.forEach(item => {
            item.addEventListener('click', e => {
                productList.innerHTML = '';

                if (categoryFiltersArray.every(item => !item.checked)) {
                    filteredArray = JSONData.data.slice();
                    hideBrandFilter();
                } else {
                    filteredArray = [];
                    checkFiltersForChecked(JSONData);
                    createBrandFilter(JSONData.data);
                }

                if (priceFlag === 1) {
                    sortArrayByPrice();
                }
                createProductCard(filteredArray);
            })
        })
    }
    function sortByPrice(JSONData) {
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
            createProductCard(filteredArray);
        });
    }
    const showProducts = async () => {
        let JSONData = await requestData(`./data/products.json`);
        filteredArray = JSONData.data.slice();
        filterBycategory(JSONData);
        sortByPrice(JSONData);
    }
    showProducts();
}