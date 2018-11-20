const spanTxt = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."


let indexText = 0;
const time = 50;

const addLetter = () => {
    spanTxt.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);