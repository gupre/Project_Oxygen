let menuLinkActive = document.querySelector(".menu__link--active");
let menuLink = document.querySelectorAll(".menu__link");

for (let elem of menuLink) {
  elem.addEventListener("click", () => {
    elem.classList.add("menu__link--active");
    menuLinkActive.classList.remove("menu__link--active");
    menuLinkActive = elem;
  });
}

let portfolioBtnActive = document.querySelector(".portfolio__btn--active");
let portfolioBtn = document.querySelectorAll(".portfolio__btn");

for (let elem of portfolioBtn) {
  elem.addEventListener("click", () => {
    elem.classList.add("portfolio__btn--active");
    portfolioBtnActive.classList.remove("portfolio__btn--active");
    portfolioBtnActive = elem;
  });
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
