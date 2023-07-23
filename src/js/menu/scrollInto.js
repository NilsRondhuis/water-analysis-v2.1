import refs from "../refs/refs";
import scrollInto from "../common/scroll-into-start";

refs.listNav.addEventListener("click", scrollSection);

function scrollSection(e) {
  e.preventDefault();

  if (e.target.classList.contains("js-link-about")) {
    scrollInto(refs.aboutSection);
    removeClassMenu();
  } else if (e.target.classList.contains("js-link-maintenance")) {
    scrollInto(refs.maintenaceSection);
    removeClassMenu();
  } else if (e.target.classList.contains("js-link-montage")) {
    scrollInto(refs.montageSection);
    removeClassMenu();
  } else if (e.target.classList.contains("js-link-team")) {
    scrollInto(refs.workSection);
    removeClassMenu();
  } else if (e.target.classList.contains("js-link-contacts")) {
    scrollInto(refs.contactsSection);
    removeClassMenu();
  }
}

function removeClassMenu() {
  refs.listNav.classList.remove("list-nav--is-show");
  refs.listNavItem.forEach((el) =>
    el.classList.remove("list-nav__item--is-show")
  );
  document.body.classList.remove("body-hidden-scroll");
  refs.iconCross.classList.remove("is-show");
  refs.iconMenu.classList.remove("is-hidden");
}
