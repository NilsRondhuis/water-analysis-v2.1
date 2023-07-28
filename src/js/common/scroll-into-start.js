export default async function (target) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
