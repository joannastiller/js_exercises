const btn = document.querySelector("button");
let number = 1;

const addElement = function () {
    const div = document.createElement('div');

    if (number % 5 == 0) {
        div.classList.add('circle')

    }

    div.textContent = number;
    document.body.appendChild(div);
    number++;
}

btn.addEventListener('click', addElement);