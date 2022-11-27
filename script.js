

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  /* searchForm.classList.remove('active'); */
}

window.onscroll = () => {
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button => {

  button.onclick = () => {
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item => {

      item.classList.remove('active');
      item.classList.add('hide');

      if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1700,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

/* window.onload = fadeOut(); */

/* loader */
const AmagiLoader = {
  __loader: null,
  show: function () {

    if (this.__loader == null) {
      var divContainer = document.createElement('div');
      divContainer.style.position = 'fixed';
      divContainer.style.left = '0';
      divContainer.style.top = '0';
      divContainer.style.width = '100%';
      divContainer.style.height = '100%';
      divContainer.style.zIndex = '9998';
      divContainer.style.backgroundColor = 'rgba(250, 250, 250, 0.80)';

      var div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = '50%';
      div.style.top = '50%';
      div.style.zIndex = '9999';
      div.style.height = '64px';
      div.style.width = '64px';
      div.style.margin = '-76px 0 0 -76px';
      div.style.border = '8px solid #e1e1e1';
      div.style.borderRadius = '50%';
      div.style.borderTop = '8px solid #eb4d4b';
      div.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
      ], {
        duration: 2000,
        iterations: Infinity
      });
      divContainer.appendChild(div);
      this.__loader = divContainer
      document.body.appendChild(this.__loader);
    }
    this.__loader.style.display = "";
  },
  hide: function () {
    if (this.__loader != null) {
      this.__loader.style.display = "none";
    }
  }
}

AmagiLoader.show();
setTimeout(() => {
  AmagiLoader.hide();
}, 3000);
/* loader */

