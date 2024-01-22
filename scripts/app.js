// Oбратный отсчет
const count = document.querySelector(".count");
// Установите дату, до которой мы ведем обратный отсчет
let countDownDate = new Date("March 10, 2024 12:00:00").getTime(); // <-- Здесь пишем дату
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
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
    let c;
    for (c = 0; c < count.length; c++) {
      count[c].classList.add("count__hidden");
    }
    clearInterval(x);
    document.getElementById("t").innerHTML = "Мы готовим новое представление"; // <-- Здесь пишем текст.
  }
}, 1000);

// карусель даты представлений
const showTime = document.querySelector("#calendar__slider");
const showTimeItems = Array.from(showTime.children);

const btnPrev = document.querySelector(".date__prev");
const btnNext = document.querySelector(".date__next");

showTimeItems.forEach(function (date, index) {
  
  // скрываем все слайды кроме первого
  if (index !== 0) {
    date.classList.add('hidden')
  }
  
  // добавляем индексы
  date.dataset.index = index;
  // добавляем data атрибут active для активного слайда
  showTimeItems[0].setAttribute('data-active', '');
})

btnNext.onclick = function () {
  showNextDate('next');
}

btnPrev.onclick = function () {
  showNextDate('prev');
}

function showNextDate(direction) {
  // скрыть текущий слайд
  const currentDate = showTime.querySelector('[data-active]');
  const currentDateIndex = +currentDate.dataset.index;
  
  currentDate.classList.add('hidden');
  currentDate.removeAttribute('data-active');

  // рассчитываем индекс в зависимости от направления
  let nextDateIndex;
  if (direction === 'next') {
    nextDateIndex = currentDateIndex + 1 === showTimeItems.length ? 0 : currentDateIndex + 1;
  } else if (direction === 'prev') {
    nextDateIndex = currentDateIndex === 0 ? showTimeItems.length - 1 : currentDateIndex - 1;
  }
  // показать следующий слайд
  const nextDate = showTime.querySelector(`[data-index="${nextDateIndex}"]`)
  nextDate.classList.remove('hidden');
  nextDate.setAttribute('data-active', '');
}

// логика скрытия хедера - если прогодится.
let lastScroll = 0;
const defaultOffset = 300;
const header = document.querySelector("header");

const containHide = () => header.classList.contains("hide");
const scrollPosition = () => document.documentElement.scrollTop;

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

// замена фона кнопок меню
const defaultButton = 200;
const button = document.querySelectorAll(".menu-button");
const containCreate = () => button.classList.contains("create");

window.addEventListener("scroll", () => {
  let b;
  if (scrollPosition() > defaultButton) {
    for (b = 0; b < button.length; b++) {
      button[b].classList.add("create");
    }
  } else if (scrollPosition() < defaultButton) {
    for (b = 0; b < button.length; b++) {
    button[b].classList.remove("create");
  }
  }
  lastScroll = scrollPosition();
});

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

// увеличение фото при нажатии
function zoomIn() {
  let s;
  const image = document.getElementById("myImage");
  for (s = 0; s < image.length; s++) {
    image[s].style.width = "200%";
  }
}

// вопросы и ответы
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

// слайдшоу галереи
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
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

// Здесь лежат вызовы функций
openHamburgerButton.addEventListener("click", openHamburger);
closeHamburgerButton.addEventListener("click", closeHamburger);
hamburger.addEventListener("click", closeHamburgerOverlay);
window.addEventListener("keyup", closeHamburgerEsc);
