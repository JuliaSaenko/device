const renderImages = (data, container, imgSize) => {
  container.innerHTML = '';
  data.forEach(slideImage => {

    const slideImgContent = `<img src="${slideImage}" width="${imgSize}" height="${imgSize}">`;

    let newImgElement = document.createElement(`li`);
    newImgElement.setAttribute('class', `product__slide swiper-slide`);
    newImgElement.innerHTML = slideImgContent;
    container.appendChild(newImgElement);
  });

};
//};

export default renderImages;
