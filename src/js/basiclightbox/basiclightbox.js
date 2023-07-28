import * as basicLightbox from "basiclightbox";
import refs from "../refs/refs";

const showGallerySlider = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const img = e.target;

  const instance = basicLightbox.create(
    `
  <img
    id="1"
    src="${img.src}"
    srcset="${img.srcset}"
    alt="${img.alt}"
  />
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
};

refs.businessSlider.addEventListener("click", showGallerySlider);
refs.homeSlider.addEventListener("click", showGallerySlider);
