const slideList = [{
        img: 'images/img1.jpg',
        text: 'Crops',
    },
    {
        img: 'images/img2.jpg',
        text: 'Rain',
    },
    {
        img: 'images/img3.jpg',
        text: 'Water',
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//Interface
const time = 2000;
let activeSlide = 0;

//Implementation

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[activeSlide].classList.add('active');
}
const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length) {
        activeSlide = 0;
    }
    image.src = slideList[activeSlide].img;
    h1.textContent = slideList[activeSlide].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? activeSlide-- : activeSlide++;

        if (activeSlide === slideList.length) {
            activeSlide = 0;
        } else if (activeSlide === -1) {
            activeSlide = slideList.length - 1;
        }
        image.src = slideList[activeSlide].img;
        h1.textContent = slideList[activeSlide].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide);