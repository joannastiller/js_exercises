let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Create 10 elements';
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `element ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);

    }
}

init()