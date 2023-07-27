import * as basicLightbox from "basiclightbox";
import refs from "../refs/refs";

const showGalleryBusinessSlider = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const img = e.target;

  const instance = basicLightbox.create(`
  <img
    id="1"
    src="${img.src}"
    srcset="${img.srcset}"
    alt="${img.alt}"
  />
  `);

  instance.show();
};

refs.businessSlider.addEventListener("click", showGalleryBusinessSlider);
