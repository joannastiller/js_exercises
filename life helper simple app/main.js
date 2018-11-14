let possibilities = ['fight', 'think about it again'];
const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clear');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const addPossibility = (e) => {
    e.preventDefault();
    possibilities.push(input.value);
    alert(`Option ${input.value} has been added`);
    input.value = '';
}

const reset = (e) => {
    e.preventDefault();
    possibilities.length = 0;
}

const showAdvice = () => {
    const index = Math.floor(Math.random() * possibilities.length);
    h1.textContent = possibilities[index];
}

const showOptions = () => {
    alert(possibilities.join(', '));
}


btnAdd.addEventListener('click', addPossibility);
btnReset.addEventListener('click', reset);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);