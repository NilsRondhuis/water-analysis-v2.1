import axios from "axios";

const TOKEN = "5259613710:AAFfUQY3EFc8DtlMX4anikW32WL1fdoW3sU";
const CHAT_ID = "-1001525418243";
axios.defaults.baseURL = "https://api.telegram.org";

export const postTelegram = async (message) => {
  const response = await axios.post(`/bot${TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });

  return response.data;
};
