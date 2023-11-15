// логика скрытия хедера
let lastScroll = 0;
const defaultOffset = 300;
const header = document.querySelector("header");

const containHide = () => header.classList.contains("hide");
const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }
  lastScroll = scrollPosition();
});

// Открытие/закрытие гамбургер меню
const hamburger = document.querySelector(".hamburger");
const openHamburgerButton = document.querySelector(".hamburger-menu");
const closeHamburgerButton = document.querySelector(".hamburger__close-menu");

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

function closeHamburgerOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeHamburger();
  }
}

// Oбратный отсчет
// Установите дату, до которой мы ведем обратный отсчет
let countDownDate = new Date("December 24, 2023 12:00:00").getTime();

// Обновляйте обратный отсчет каждые 1 секунду
let x = setInterval(function () {
  // Получить сегодняшнюю дату и время
  let now = new Date().getTime();
  // Найдите расстояние между моментом сейчас и датой обратного отсчета
  let distance = countDownDate - now;

  // Расчеты времени для дней, часов, минут и секунд
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выведите результат
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;

  // Если обратный отсчет закончился, напишите какой-нибудь текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("t").innerHTML = "Мы готовим новое представление";
  }
}, 1000);

// вопрос-ответ
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// слайдшоу
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

openHamburgerButton.addEventListener("click", openHamburger);
closeHamburgerButton.addEventListener("click", closeHamburger);
hamburger.addEventListener("click", closeHamburgerOverlay);
window.addEventListener("keyup", closeHamburgerEsc);
