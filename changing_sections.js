function changeText() {

    const scrollSize = window.scrollY;
    const txt = document.querySelector('div.info');
    const sectionSize1 = document.querySelector('.section1').clientHeight;
    const sectionSize2 = document.querySelector('.section2').clientHeight;
    const sectionSize3 = document.querySelector('.section3').clientHeight;

    const distance2 = document.querySelector('.section2').offsetTop;
    const distance3 = document.querySelector('.section3').offsetTop;

    if (scrollSize < sectionSize1) {
        txt.textContent = 'sekcja 1'
    } else if (scrollSize < sectionSize2 + distance2) {
        txt.textContent = 'sekcja 2'
    } else if (scrollSize < sectionSize3 + distance3) {
        txt.textContent = 'sekcja 3'
    } else {
        txt.textContent = 'sekcja 4'
    }
}

window.addEventListener('scroll', changeText)