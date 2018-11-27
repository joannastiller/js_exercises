// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const result = document.querySelector('.time div');
let time = 0;
let active = false;
let idInt;

const count = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Start';
        idInt = setInterval(stopwatch, 10);
    } else {
        active = !active;
        btnStart.textContent = 'Pause';
        clearInterval(idInt);
    }
}

const stopwatch = () => {
    time++;
    result.textContent = (time / 100).toFixed(2);
}


const reset = () => {
    time = 0;
    result.textContent = '---';
    active = false;
    btnStart.textContent = 'Start';
    clearInterval(idInt);
}


btnStart.addEventListener('click', count);
btnReset.addEventListener('click', reset);