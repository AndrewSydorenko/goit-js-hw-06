// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.



const widgetEl = document.querySelector('.widget');
const bodyEl = document.querySelector('body')
const colorChange = document.querySelector('.change-color')

colorChange.addEventListener('click', (event) => {
  bodyEl.style.background = getRandomHexColor();
  colorChange.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
