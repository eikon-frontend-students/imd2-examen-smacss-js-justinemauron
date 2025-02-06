document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.querySelector(".header-title l-topbar");

  bouton.addEventListener("click", function () {
    bouton.style.backgroundColor = "var(--yellow)";
    bouton.style.color = "varr(--dark-blue)";
  });
});
