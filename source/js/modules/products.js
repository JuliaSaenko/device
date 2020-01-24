import fillter from "./fillter";
import cardPage from "./card-page";


export default () => {
  const productList = document.querySelector('.catalog__list');
  const catalogCrumb = document.getElementById('catalog-crumb');
  catalogCrumb.addEventListener('click', handleClickOnCatalogCrumb);

  let filter = null;
  let userFilter;
  const filteredArray = [];

  function checkState() {
    const checkboxes = Array.from(document.querySelectorAll('.category__filter'));
    checkboxes.forEach(item => {
      if(item.checked){
        filter = item.id;
        return;
      }
    })
  }
  const requestData = async () => {
    const products = await fetch(`./data/products.json`);

    if (!products.ok) {
      throw new Error(`Can not fetch ${products.url}`)
    }

    const data = await products.json();
    return { data }
  };

  const showData = () => {
    requestData().then((response) => {      
      if(filter !== null){
        response.data.forEach(item => {
          if(item.category === filter){
            filteredArray.push(item)
            userFilter = item.userCategory;
          }
        })
        checkBreadCrumbs();
        createCards(filteredArray); 
        localStorage.removeItem('categoryName');       
      }else {
        createCards(response.data);     
      }
    })
      .catch((error) => {
        productList.innerHTML = `
        <p class = "item__error">
            Too many requests, try again in 1 minute...
        </p>
        `
      })
  };

  function createCards(response) {

    response.forEach(item => {
      productList.innerHTML += `
        <li class="catalog__item"  data-id="${item.id}">
            <a class="catalog__link" data-id="${item.id}" href="#/i/${item.id}">
                <h3 class="catalog__title">${item.name}</h3>
            </a>
            <p class="catalog__price">${item.price} грн</p>
            <div class="catalog__wrapper">
                <img class="catalog__image" src="${item.img}">
                <p class="catalog__actions">
                <button class="catalog__btn btn" type="button">В корзину</button>
                </p>
            </div>
        </li>
        `;

      const catalogLink = document.querySelector(`.catalog__link`);
      catalogLink.addEventListener(`click`, () => {
        if(catalogLink.getAttribute(`data-id`) === item.id) {
          console.log(1);
          cardPage();
        }
      });
    })
  }
  function checkBreadCrumbs(){
    const crumb = document.getElementById('breadcrumb');
    crumb.innerHTML = `${userFilter}`;
  }
  function handleClickOnCatalogCrumb(){
    //удаляем локал сторедж
    localStorage.removeItem('categoryName'); 
    //получаем крошку категории
    const crumb = document.getElementById('breadcrumb');
    //фильтра по категориям
    const categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    //меняем крошку на все товары
    crumb.innerHTML = `Все товары`;
    //очищаем полотно товаров и выводим все товары
    productList.innerHTML = '';
    filter = null;
    showData();
    //снимаем чеки со всех чекбоксов
    categoryFiltersArray.forEach(item => {
      if(item.checked) {
        item.checked = false;
      }
    })
    //закрываем бренд лист
    const brandFilter = document.getElementById('brand');
    brandFilter.innerHTML = '';
  }

  checkState();
  showData(filter);
}

