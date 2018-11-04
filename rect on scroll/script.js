let size = 50;
let grow = true;

document.body.style.height = '10000px';
const div = document.createElement('div');
document.body.appendChild(div);

div.style.position = 'fixed';
div.style.top = '0px';
div.style.left = '0px';
div.style.width = '100%';
div.style.height = size + 'px';
div.style.backgroundColor = 'purple';

const changeHeight = function () {

    if (size > window.innerHeight / 2) {
        grow = false;
        div.style.backgroundColor = '#ccc';
    } else if (size <= 0) {
        grow = true;
        div.style.backgroundColor = 'purple';
    }

    if (grow) {
        size += 5;
    } else {
        size -= 5;
    }
    div.style.height = size + 'px';
}

window.addEventListener('scroll', changeHeight);