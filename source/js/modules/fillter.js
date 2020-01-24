"use strict"

import { async, values } from "./polyfill";
import products from "./products";
import redirect2 from "./redirect2";
import addToCart from './addToCart';

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
  function addListenerOnBrands() {
    const brandFiltersArray = Array.from(document.querySelectorAll('.brand__filter'));
    brandFiltersArray.forEach(brand => {
      brand.addEventListener('click', e => {
        productList.innerHTML = '';

        if (brand.checked) {
          filteredArray.forEach(product => {
            if (brand.id === product.brand) {
              brandFilteredArray.push(product);
            }
          })
          if (priceFlag === 1) {
            sortArrayByPrice(brandFilteredArray);
            createProductCard(brandFilteredArray);
            addToCart();
          } else if (priceFlag ===2) {
            sortHighToLow()
          } else {
            createProductCard(brandFilteredArray);
            addToCart();
          }
          //createProductCard(brandFilteredArray);
        } else if(brandFiltersArray.every(item => !item.checked)){
          brandFilteredArray = [];
          if (priceFlag === 1) {
            sortArrayByPrice(filteredArray);
            createProductCard(filteredArray);
            addToCart();
          } else if (priceFlag ===2) {
            sortHighToLow()
          } else {
            createProductCard(filteredArray);
            addToCart();
          }
          //createProductCard(filteredArray);
        } else {
          brandFilteredArray = [];
          brandFiltersArray.forEach(product => {
            if (product.checked) {
              filteredArray.forEach(item => {
                if (item.brand === product.id) {
                  brandFilteredArray.push(item);
                }
              })
            }
          })
          if (priceFlag === 1) {
            sortArrayByPrice(brandFilteredArray);
            createProductCard(brandFilteredArray);
            addToCart();
          } else if (priceFlag ===2) {
            sortHighToLow()
          } else {
            createProductCard(brandFilteredArray);
            addToCart();
          }
          // createProductCard(brandFilteredArray);
        }
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
            <li class="catalog__item"  data-id="${item.id}">
            <a class="catalog__link" data-id="${item.id}" href="#/i/${item.id}">
                <h3 class="catalog__title">${item.name}</h3>
            </a>
            <p class="catalog__price">${item.price}$</p>
            <div class="catalog__wrapper">
                <img class="catalog__image" src="${item.img}">
                <div class="catalog__actions">
                    <button class="catalog__btn btn addToCartBtn" type="button">В корзину</button>
                </div>
            </div>
        </li>
            `;
    })
    addToCart();
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
  function sortArrayByPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
  }
  function filterBycategory(JSONData) {
    categoryFiltersArray.forEach(item => {
      item.addEventListener('click', e => {
        productList.innerHTML = '';

        if (categoryFiltersArray.every(item => !item.checked)) {
          filteredArray = JSONData.data.slice();
          hideBrandFilter();
          //createBreadCrumb(item);
        } else {
          filteredArray = [];
          brandFilteredArray = [];
          checkFiltersForChecked(JSONData);
          //createBreadCrumb(item);
          createBrandFilter(JSONData.data);
        }
        createBreadCrumb(item);

        if (priceFlag === 1) {
          sortArrayByPrice(filteredArray);
          createProductCard(filteredArray);
          addToCart();
        } else if (priceFlag === 2){
          sortHighToLow()
        } else {
          createProductCard(filteredArray);
          addToCart();
        }
        //console.log(filteredArray);

        //createProductCard(filteredArray);
      })
    })
  }
  function sortByPrice(JSONData) {
    priceFilter.addEventListener('click', e => {
      productList.innerHTML = '';
      priceFlag = 1;
      //const brandFiltersArray = Array.from(document.querySelectorAll('.brand__filter'));
      if (categoryFiltersArray.every(item => !item.checked)) {
        JSONData.data.sort((a, b) => a.price - b.price);
        createProductCard(JSONData.data);
        addToCart();
      } else {
        // brandFilteredArray.sort((a, b) => b.price - a.price);
        // createProductCard(brandFilteredArray);
        // filteredArray = [];
        if(brandFilteredArray.length !== 0) {
          brandFilteredArray.sort((a, b) => a.price - b.price);
          createProductCard(brandFilteredArray);
          addToCart();
        } else {
          filteredArray = [];
          checkFiltersForChecked(JSONData);
          filteredArray.sort((a, b) => a.price - b.price);
          createProductCard(filteredArray);
          addToCart();
        }

        // checkFiltersForChecked(JSONData);
        // filteredArray.sort((a, b) => a.price - b.price);
        // createProductCard(filteredArray);
      }
      console.log(filteredArray);

    });
  }
  const showProducts = async () => {
    let JSONData = await requestData(`./data/products.json`);
    filteredArray = JSONData.data.slice();
    filterBycategory(JSONData);
    sortByPrice(JSONData);
  }
  showProducts();

  const highPrice = document.getElementById('downprice');
  const lowPrice = document.getElementById('upprice');
  lowPrice.addEventListener('click', sortLowToHigh);
  highPrice.addEventListener('click', sortHighToLow);
  function sortLowToHigh() {
    productList.innerHTML = '';
    priceFlag = 1;
    const brandFiltersArray = Array.from(document.querySelectorAll('.brand__filter'));
    if (brandFiltersArray.every(item => !item.checked)) {
      filteredArray.sort((a, b) => a.price - b.price);
      createProductCard(filteredArray);
      addToCart();
    } else {
      brandFilteredArray.sort((a, b) => a.price - b.price);
      createProductCard(brandFilteredArray);
      addToCart();
    }
  }
  function sortHighToLow() {
    productList.innerHTML = '';
    priceFlag = 2;
    const brandFiltersArray = Array.from(document.querySelectorAll('.brand__filter'));
    if (brandFiltersArray.every(item => !item.checked)) {
      filteredArray.sort((a, b) => b.price - a.price);
      createProductCard(filteredArray);
      addToCart();
    } else {
      brandFilteredArray.sort((a, b) => b.price - a.price);
      createProductCard(brandFilteredArray);
      addToCart();
    }

  }
  function createBreadCrumb() {
    const crumbBlock = document.getElementById('breadcrumb');
    let userCategories = [];
    crumbBlock.innerHTML = '';

    filteredArray.forEach((item) => {
      userCategories.push(item.userCategory);
    });

    userCategories = new Set(userCategories);

    userCategories.forEach(item => {
      if (userCategories.size > 5) {
        crumbBlock.innerHTML = '';
        crumbBlock.innerHTML += `
                    <a class="breadcrumbs__link"> Все товары </a>
                `;
      } else {
        crumbBlock.innerHTML += `
                    <a class="breadcrumbs__link">${item} / </a>
                `;
      }
    })
  }
}
