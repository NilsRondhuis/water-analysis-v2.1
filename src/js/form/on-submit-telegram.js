import { success, error, defaultModules } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import refs from "../refs/refs";
import resetForm from "../form/remove-class-submit-form";
import {
  submitMessage,
  SUCCESS_TEXT_MSG,
  SUCCESS_TEXT_MSG,
  ERROR_TITLE_MSG,
  ERROR_TEXT_MSG,
  SUCCESS_TITLE_MSG,
} from "./sumbmit-messages";
import { postTelegram } from "../services/postTg";

defaultModules.set(PNotifyMobile, {});

const onSubmitForm = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const {
    elements: { name, phone, city, text, promocode },
  } = form;

  console.log(promocode.value);

  const data = {
    name: name.value,
    phone: phone.value,
    city: city.value,
    text: text.value,
    promocode: promocode.value,
  };

  const message = submitMessage(data);

  try {
    await postTelegram(message);
    form.reset();
    resetForm();
    success({
      id: "success",
      title: SUCCESS_TITLE_MSG,
      text: SUCCESS_TEXT_MSG,
      delay: 5000,
      sticker: false,
      maxTextHeight: null,
    });
  } catch {
    error({
      title: ERROR_TITLE_MSG,
      text: ERROR_TEXT_MSG,
      delay: 7000,
      sticker: false,
      maxTextHeight: null,
    });
  }
};

refs.form.addEventListener("submit", onSubmitForm);
