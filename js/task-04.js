// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const el = {
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

el.increment.addEventListener('click', increment);
el.decrement.addEventListener('click', decrement);

function increment() {
    el.value.textContent = counterValue += 1;
};

function decrement() {
    el.value.textContent = counterValue -= 1;
}