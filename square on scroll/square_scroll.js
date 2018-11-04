const square = document.createElement('div');
document.body.appendChild(square);
let size = 10;
square.style.width = size + "px";
square.style.height = size + "px";
let grow = true;

window.addEventListener('scroll', function () {

    if (grow) {
        size += 3;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 3;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

    if (size >= this.window.innerWidth / 2) {
        grow = false;
    } else if (size < 10) {
        grow = true;
    }
})