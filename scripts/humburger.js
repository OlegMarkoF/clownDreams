// Открытие/закрытие гамбургер меню
const hamburger = document.querySelector(".hamburger");
const openHamburgerButton = document.querySelector(".hamburger-menu");
const closeHamburgerButton = document.querySelector(".hamburger__close-menu");
const clickMenuButton = document.getElementsByClassName("service-button");

const openHamburger = () => {
  hamburger.classList.add("hamburger_opened");
};
const closeHamburger = () => {
  hamburger.classList.remove("hamburger_opened");
};
function closeHamburgerEsc(evt) {
  if (evt.key === "Escape") {
    closeHamburger();
  }
}
function closeHamburgerClickButton(evt) {
  if (evt.key === "click") {
    closeHamburger();
  }
}
function closeHamburgerOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeHamburger();
  }
}
let n;
for (n = 0; n < clickMenuButton.length; n++) {
  clickMenuButton[n].addEventListener("click", closeHamburger);
}

// Здесь лежат вызовы функций
openHamburgerButton.addEventListener("click", openHamburger);
closeHamburgerButton.addEventListener("click", closeHamburger);
hamburger.addEventListener("click", closeHamburgerOverlay);
window.addEventListener("keyup", closeHamburgerEsc);