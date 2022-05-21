const headerText = document.querySelector(".header__text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  //   console.log(value);
  headerText.style.opacity = "100" - value * 1 + "%";
});
