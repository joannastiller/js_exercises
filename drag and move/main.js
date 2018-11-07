const div = document.querySelector('div');
let divX;
let divY;
let inDivX;
let inDivY;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let draw = false;

div.addEventListener('mousedown', function (e) {
    div.style.backgroundColor = 'gray';
    draw = !draw;
    inDivX = e.offsetX;
    inDivY = e.offsetY;
})

div.addEventListener('mousemove', function (e) {

    if (draw) {
        divX = e.clientX - inDivX;
        divY = e.clientY - inDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }

})

div.addEventListener('mouseup', function () {
    div.style.backgroundColor = 'blueviolet';
    draw = !draw;
})