// pink if both values are even
// gray if both values are odd
// blue if one value is even and one odd

document.body.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = 'pink';
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        document.body.style.backgroundColor = 'gray';
    } else {
        document.body.style.backgroundColor = 'cadetblue';
    }
})