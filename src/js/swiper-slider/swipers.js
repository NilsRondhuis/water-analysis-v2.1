import refs from "../refs/refs";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

new Swiper(".hero-swiper", {
  modules: [Pagination, Navigation, Autoplay],
  loop: true,
  enabled: true,
  effect: "slide",
  autoHeight: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    stopOnLastSlide: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  speed: 1000,
  simulateTouch: true,
  grabCursor: true,
  on: {
    init: function () {
      refs.menuBtn.addEventListener("click", () => {
        if (!refs.listNav.classList.contains("list-nav--is-show")) {
          this.enabled = false;
          document
            .querySelector(".swiper-pagination")
            .classList.add("is-hidden");
        } else {
          this.enabled = true;
          document
            .querySelector(".swiper-pagination")
            .classList.remove("is-hidden");
        }
      });
      refs.listNav.addEventListener("click", (e) => {
        if (e.target.classList.contains("list-nav__link")) {
          this.enabled = true;
          document
            .querySelector(".swiper-pagination")
            .classList.remove("is-hidden");
        }
      });
    },
  },
});

new Swiper(".swiper__slider-work", {
  modules: [Pagination, Navigation],
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".montage-swiper", {
  modules: [Pagination, Navigation],
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  spaceBetween: 45,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

new Swiper(".clients-swiper", {
  modules: [Pagination, Navigation],
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    767: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});
