import refs from "../refs/refs";

refs.maintenanceCard.forEach((card) => {
  card.addEventListener("click", (e) => e.preventDefault());
});
