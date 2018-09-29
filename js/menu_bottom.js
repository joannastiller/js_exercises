const button = document.querySelector(".arrow");
const menu = document.querySelector("nav");

button.addEventListener("click", function () {
    button.classList.toggle("show");
    menu.classList.toggle("show");
})