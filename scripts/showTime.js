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
  const nextDate = showTime.querySelector(`[data-index="${nextDateIndex}"]`);
  nextDate.classList.remove('hidden');
  nextDate.setAttribute('data-active', '');
}
