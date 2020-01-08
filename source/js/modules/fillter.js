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
    const categoryFiltersArray = Array.from(document.querySelectorAll('.category__filter'));
    //console.log(categoryFiltersArray);
    let quantity = 0;
    categoryFiltersArray.forEach(item => {
        item.addEventListener('click', e => {
            categoryFiltersArray.forEach(category => {
                if(category.checked) {
                    quantity++;
                }
                if(quantity = 0) {
                    
                }
                
                
            })
        })
    })
   
    
    // categoryFiltersArray.forEach(category => {
    //     if(category.checked) {
    //         console.log(1);
            
    //     }
    // })


    // categoryFiltersArray.forEach(category => {
    //     console.log(category.checked);
    //     category.addEventListener('click', e => {
            
            
    //         requestData()
    //             .then(response => {
    //                 response.data.forEach(item => {
    //                     if(e.target.id === item.category){
    //                         productList.innerHTML += `${e.target.id}`;
                            
    //                     }
                        
    //                 })
    //             })
            
    //     })
    // })
}
    // categoryFilter.addEventListener('click', e => {
    //     // console.log(categoryFilter);
    //     console.log(categoryFiltersArray);

        
    //     if (e.target.checked) {
    //         //productList.innerHTML = '';
    //         requestData()
    //             .then(response => {
    //                 // console.log(response.data);
    //                 response.data.forEach(item => {
    //                     if (item.category === e.target.id) {
    //                         productList.innerHTML += `
    //                             <li class="catalog__item">
    //                             <a class="catalog__link" href="#">
    //                                 <h3 class="catalog__title">${item.name}</h3>
    //                             </a>
    //                             <p class="catalog__price">${item.price} грн</p>
    //                             <div class="catalog__wrapper">
    //                                 <img class="catalog__image" src="${item.img}">
    //                                 <p class="catalog__actions">
    //                                 <button class="catalog__btn btn" type="button">В корзину</button>
    //                                 <button class="catalog__compare-btn" type="button">Добавить к сравнению</button>
    //                                 </p>
    //                             </div>
    //                         </li>
    //                             `;
    //                     }
    //                 })

    //             })

    //     }

        // categoryFiltersArray.forEach(category => {
        //     if(category.checked) {
        //        console.log('ok');

        //     } else if(!category.checked) {
        //         console.log('no');

        //     }
        // })
//     })
// }

                // requestData()
                //     .then(response => {
                //         //console.log(response.data);
                //         //productList.innerHTML = '';
                //         response.data.forEach(item => {
                //             if(item.category === categ.id){

                //                 //console.log(item);
                //                 productList.innerHTML += `
                //                     <li class="catalog__item">
                //                     <a class="catalog__link" href="#">
                //                         <h3 class="catalog__title">${item.name}</h3>
                //                     </a>
                //                     <p class="catalog__price">${item.price} грн</p>
                //                     <div class="catalog__wrapper">
                //                         <img class="catalog__image" src="${item.img}">
                //                         <p class="catalog__actions">
                //                         <button class="catalog__btn btn" type="button">В корзину</button>
                //                         <button class="catalog__compare-btn" type="button">Добавить к сравнению</button>
                //                         </p>
                //                     </div>
                //                 </li>
                //                     `;

                //             }

                            //console.log(categ.id);




                            // if(item.category === categ.id) {
                            //     productList.innerHTML += `
                            //     <li class="catalog__item">
                            //     <a class="catalog__link" href="#">
                            //         <h3 class="catalog__title">${item.name}</h3>
                            //     </a>
                            //     <p class="catalog__price">${item.price} грн</p>
                            //     <div class="catalog__wrapper">
                            //         <img class="catalog__image" src="${item.img}">
                            //         <p class="catalog__actions">
                            //         <button class="catalog__btn btn" type="button">В корзину</button>
                            //         <button class="catalog__compare-btn" type="button">Добавить к сравнению</button>
                            //         </p>
                            //     </div>
                            // </li>
                            //     `;
                            //}
                       // })
                        // if(response.data.category === item.id){
                        //     console.log("yes");

                        // }

                    //})


           // }

       // })

   // })




//}