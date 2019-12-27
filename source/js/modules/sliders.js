import Swiper from 'swiper';

export default () => {
  const mainSlider = document.querySelector('.main-slider');
  const brandsSlider = document.querySelector(`.brands__list-wrapper`);

  if(mainSlider) {
    const mainSwiper = new Swiper(mainSlider, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,

      autoplay: {
        delay: 3000,
      },

      pagination: {
        el: '.pagination-bullets',
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'pagination-bullets__item',
        bulletActiveClass: 'pagination-bullets__item--active',
        clickable: true,
      },
    });
  }

  if(brandsSlider) {
    const brandsSwiper = new Swiper(brandsSlider, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',

      scrollbar: {
        el: '.brands__scrollbar',
        //hide: true,
      },
    })
  }
};
