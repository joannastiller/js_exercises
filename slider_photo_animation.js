// Parameters
let activeElement = 0;
const timeChange = 4000;

// Declaration of constants

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

// Information about changing elements

const colorImages = ['img_slider_photo_animation/s1.png', 'img_slider_photo_animation/s2.png', 'img_slider_photo_animation/s3.png'];
const grayImages = ['img_slider_photo_animation/s1a.png', 'img_slider_photo_animation/s2a.png', 'img_slider_photo_animation/s3a.png'];
const names = ['Anna Baugart', 'Marek Feliksiak', 'Jakub Górski'];
const professions = ['Programistka JS', 'UX i UI Designer', "Front-End Developer"];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}

setInterval(changeElement, timeChange);