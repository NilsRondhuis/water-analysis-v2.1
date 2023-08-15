export const submitMessage = (data) => {
  let message = `<b>Заявка з сайту!</b>\n`;
  message += `<b>Ім'я: </b>${data.name}\n`;
  message += `<b>Телефон: </b>${data.phone}\n`;
  message += `<b>Населений пункт: </b>${data.city}\n`;
  message += `<b>Коментар: </b>${data.text}\n`;
  message += `<b>Промокод: </b>${data.promocode}`;

  return message;
};

export const SUCCESS_TITLE_MSG = "Заявку успішно відправлено!";
export const SUCCESS_TEXT_MSG =
  "Ми отримали Вашу заявку і зателефонуємо Вам в найближчий час.";
export const ERROR_TITLE_MSG = "Помилка при відправленні заявки";
export const ERROR_TEXT_MSG =
  "Приносимо вибачення, виникла помилка при відправці вашої заявки. Будь ласка спробуйте ще раз пізніше або зателефонуйте нам по телефону на сайті";
