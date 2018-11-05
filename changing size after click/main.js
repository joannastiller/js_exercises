const btn = document.querySelector('button');
const liElements = document.querySelectorAll('li');
let size = 10;

// btn.addEventListener('click', function () {
//     liElements.forEach(function (liElement) {
//         liElement.style.display = 'block';
//         liElement.style.fontSize = size + 'px';
//     })
//size++;
//   // })

btn.addEventListener('click', function () {
    for (let i = 0; i < liElements.length; i++) {
        if (liElements[i].style.display === '') {
            liElements[i].style.display = 'block';
        }
        liElements[i].style.fontSize = size + 'px';
    }
    size++;
})