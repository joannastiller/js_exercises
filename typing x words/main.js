// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];

let txtIndex = 0;
let letterIndex = -10;

// Implementacja
const addLetter = () => {
    if (letterIndex >= 0) {
        spnText.textContent += txt[txtIndex][letterIndex];
    }
    letterIndex++;

    if (letterIndex === txt[txtIndex].length) {
        txtIndex++;
        if (txtIndex === txt.length) return;

        return setTimeout(() => {
            letterIndex = -10;
            spnText.textContent = '';
            addLetter();
        }, 1500)
    }
    setTimeout(addLetter, 100);

}


addLetter();

//Cursor animation
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);