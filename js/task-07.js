// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.



const range = document.querySelector("#font-size-control"),
    h3 = document.querySelector("#text");

range.addEventListener("input", function (event) {
    h3.style.fontSize = this.value + "px";
});