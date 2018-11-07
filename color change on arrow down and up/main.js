let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {

  //SOLUTION WITH IF 
  // if (e.keyCode === 38 && red < 255) {
  //   red += 2;
  //   green += 2;
  //   blue += 2;

  // } else if (e.keyCode === 40 && red >= 0) {

  //   red -= 2;
  //   green -= 2;
  //   blue -= 2;

  // }
  // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


  //SOLUTION WITH SWITCH
  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red <= 255 ? red += 2 : red}, ${green <= 255 ? green += 2 : grenn}, ${blue <= 255 ? blue += 2 : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red >= 0 ? red -= 2 : red}, ${green >= 0 ? green -= 2 : green }, ${blue >= 0 ? blue -= 2 : blue})`;
      break;
  }

}

window.addEventListener('keydown', changeColor)