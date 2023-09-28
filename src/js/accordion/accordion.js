import refs from "../refs/refs";

const toggleAccordion = (e) => {
  refs.accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button-js");
    const content = item.querySelector(".accordion-answer-js");
    const iconPlus = item.querySelector(".icon-plus-js");
    const iconMinus = item.querySelector(".icon-minus-js");

    button.addEventListener("click", (e) => {
      iconPlus.classList.toggle("visually-hidden");
      iconMinus.classList.toggle("visually-hidden");
      content.classList.toggle("visually-hidden");
      item.classList.toggle("active");
    });
  });
};

document.addEventListener("DOMContentLoaded", toggleAccordion);
