import * as basicLightbox from "basiclightbox";
import refs from "../refs/refs";
import dataWorks from "./data/works-photo";

const showGallerySliderShared = (e) => {
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

const showGallerySliderWork = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const img = e.target;

  const result = dataWorks.find((item) => item.id === img.id);

  const instance = basicLightbox.create(
    `
  <img
    src="${result.img}"
    srcset="${result.img} 1x, ${result.img2x} 2x"
    alt="${result.alt}"
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

refs.businessSlider.addEventListener("click", showGallerySliderShared);
refs.homeSlider.addEventListener("click", showGallerySliderShared);
refs.workSlider.addEventListener("click", showGallerySliderWork);
