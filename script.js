document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burgerMenu");
  const leftMenuWrap = document.querySelector(".leftMenuWrap");

  burgerMenu.addEventListener("click", function () {
    leftMenuWrap.classList.toggle("moveBur");
  });
});
