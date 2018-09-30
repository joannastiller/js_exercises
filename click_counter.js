let clickNumber = 0;
const spanCounter = document.querySelector("span");
const leftClick = document.querySelector(".left");
const rightClick = document.querySelector(".right");

leftClick.addEventListener("click", function () {
    clickNumber++;
    spanCounter.textContent = clickNumber;
})

rightClick.addEventListener("click", function () {
    clickNumber--;
    spanCounter.textContent = clickNumber;
})