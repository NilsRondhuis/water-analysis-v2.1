import refs from "../refs/refs";

const TIMEOUT_FIRST_VISIT = 30000;

const showModalPromocode = () => {
  const isVisit = localStorage.getItem("second-visit");

  if (isVisit) {
    return;
  }

  localStorage.setItem("second-visit", "true");

  setTimeout(() => {
    refs.backdrop.classList.add("backdrop-promocode__is-show");
    refs.modalPromocode.classList.add("promocode-modal__is-show");
  }, TIMEOUT_FIRST_VISIT);
};

const onCloseModalAndBackdrop = () => {
  refs.backdrop.classList.remove("backdrop-promocode__is-show");
  refs.modalPromocode.classList.remove("promocode-modal__is-show");
};

const closeModalBackdrop = (e) => {
  if (e.target.classList.contains("backdrop-promocode")) {
    onCloseModalAndBackdrop();
  }

  return;
};

const onCopyPromocode = () => {
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const copyInput = document.createElement("input");
    copyInput.style.position = "fixed";
    copyInput.style.opacity = "0";
    copyInput.value = refs.fieldPromocode.textContent;

    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand("copy");
    document.body.removeChild(copyInput);

    refs.btnCopy.textContent = "скопійовано";

    setTimeout(() => {
      onCloseModalAndBackdrop();
    }, 1000);
  } else {
    navigator.clipboard
      .writeText(refs.fieldPromocode.textContent)
      .then(() => {
        refs.btnCopy.textContent = "скопійовано";
        setTimeout(() => {
          onCloseModalAndBackdrop();
        }, 1000);
      })
      .catch((err) => console.log(err));
  }
};

refs.btnCopy.addEventListener("click", onCopyPromocode);

refs.btnClosePromocode.addEventListener("click", onCloseModalAndBackdrop);

window.addEventListener("click", closeModalBackdrop);

window.addEventListener("DOMContentLoaded", showModalPromocode);

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    onCloseModalAndBackdrop();
  }
});
