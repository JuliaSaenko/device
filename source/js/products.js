const productList = document.querySelector('.catalog__list');

const requestData = async () => {
    const products = await fetch(`products.json`);

    if (!products.ok) {
        throw new Error(`Can not fetch ${products.url}`)
    }

    const data = await products.json();
    return { data }
}

//Show data on page

const showData = () => {
    requestData().then((response) => {
        createCards(response);
    })
        .catch((error) => {
            productList.innerHTML = `
        <p class = "item__error">
            Too many requests, try again in 1 minute...
        </p>
        `
        })
}
function createCards(response) {    
    response.data.forEach(item => {
        productList.innerHTML += `
        <li class="catalog__item">
            <a class="catalog__link" href="#">
                <h3 class="catalog__title">${item.brand} ${item.model}</h3>
            </a>
            <p class="catalog__price">${item.price}</p>
            <div class="catalog__wrapper">
                <img class="catalog__image" src="${item.img}" width="360" height="380" alt="Любительская селфи-палка">
                <p class="catalog__actions">
                <button class="catalog__btn btn" type="button">В корзину</button>
                <button class="catalog__compare-btn" type="button">Добавить к сравнению</button>
                </p>
            </div>
        </li>
        `;
        
    })
} 
showData();