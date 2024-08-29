// Слайдер на первом блоке

var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlidesBounds: true,
  freeMode: false,
  watchSlidesVisibility: true,
  watchOverflow: true,
  direction: 'horizontal',
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    993: {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 16,
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});


// Табы

const tabLinks = document.querySelectorAll('.tabs__list .tabs__link');
const tabContents = document.querySelectorAll('.tabs__content .content__block');

tabLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const dataTab = el.getAttribute('data-tab');

    for (let i = 0; i < tabLinks.length; i++) {
      console.log(tabLinks[i])
      tabLinks[i].classList.remove('tabs__link--active');
      tabContents[i].classList.remove('content__block--active');

      if (el == tabLinks[i]) {
        el.classList.add('tabs__link--active');
        tabContents[i].classList.add('content__block--active');
      }
    }


  })
})


// Добавление в избранное в блоке Рекомендуем

const favBtns = document.querySelectorAll('.card__favorites');
favBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    el.classList.toggle('card__favorites--active');
  })
})

// Каталог

const catalogBtn = document.querySelector('.catalog__btn');
const catalogMenu = document.querySelector('.catalog__menu');

catalogBtn.addEventListener('click', (e) => {
  e.preventDefault();
  catalogMenu.classList.toggle('catalog__menu--open');

})