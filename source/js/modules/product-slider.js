import Swiper from 'swiper';

export default () => {
  const productLargeSlider = document.querySelector('.product__gallery');
  const productSmallSlider = document.querySelector(`.product__gallery-small`);

  if(productLargeSlider) {
    const galleryThumbs = new Swiper(productSmallSlider, {
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

    });
    const galleryTop = new Swiper(productLargeSlider, {
      slidesPerView: 1,

      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
};
