import refs from "../refs/refs";

const onClickBtnToForm = () => {
  refs.orderFormSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

const onClickOrderAnalysis = () => {
  onClickBtnToForm();
  refs.form.text.value = "Мені потрібен аналіз води";
};

const onClickOrderMaintenance = () => {
  onClickBtnToForm();
  refs.form.text.value = "Мені потрібно обслуговування системи";
};

const onClickOrderCalc = () => {
  onClickBtnToForm();
  refs.form.text.value = "Хочу прорахунок системи";
};

const onClickOrderConsultation = () => {
  onClickBtnToForm();
  refs.form.text.value = "Мені потрібна консультація";
};

refs.btnOrderAnalasys.forEach((btn) => {
  btn.addEventListener("click", onClickOrderAnalysis);
});

refs.btnOrderMaintenance.forEach((btn) => {
  btn.addEventListener("click", onClickOrderMaintenance);
});

refs.btnOrderCalc.forEach((btn) => {
  btn.addEventListener("click", onClickOrderCalc);
});

refs.btnOrderConsultation.forEach((btn) => {
  btn.addEventListener("click", onClickOrderConsultation);
});
