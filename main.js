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

    for (let i = 0; i < tabLinks.length; i++) {
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

// Меню Каталог

const catalogBtn = document.querySelector('.catalog__btn');
const catalogMenu = document.querySelector('.catalog__menu');

catalogBtn.addEventListener('click', (e) => {
  e.preventDefault();
  catalogMenu.classList.toggle('catalog__menu--open');

})

// Добавить в корзину

const btnCart = document.querySelector('.product__btn--cart');
btnCart.addEventListener('click', (e) => {
  e.preventDefault();
  if (btnCart.classList.contains('product__btn--active')) btnCart.children[0].textContent = 'Добавить в корзину'
  else {
    btnCart.children[0].textContent = 'Убрать из корзины';
  }

  btnCart.classList.toggle('product__btn--active');

})

// Добавить в избранное

const btnFav = document.querySelector('.product__btn--favorites');
btnFav.addEventListener('click', (e) => {
  e.preventDefault();
  if (btnFav.classList.contains('product__btn--active')) btnFav.children[0].textContent = 'Добавить в избранное'
  else {
    btnFav.children[0].textContent = 'Убрать из избранного';
  }

  btnFav.classList.toggle('product__btn--active');

})


// Прокрутка до блока Описание

const goToDesc = document.querySelector('.product__link--desc');
goToDesc.addEventListener('click', (e) => {
  e.preventDefault();
  tabLinks.forEach(el => {
    el.classList.remove('tabs__link--active');
    if (el.getAttribute('data-tab') == 'desc') el.classList.add('tabs__link--active');
  })

  tabContents.forEach(el => {
    el.classList.remove('content__block--active');
    if (el.getAttribute('data-content') == 'desc') el.classList.add('content__block--active');
  })
  
  const el = document.querySelector('.content__block[data-content="desc"]');
  el.scrollIntoView({ behavior: "smooth" });
})