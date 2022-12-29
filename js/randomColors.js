let primaryColor = localStorage.getItem('primaryColor');
let seedNumber = localStorage.getItem('seedNumber');
if (!primaryColor || !seedNumber) {
  primaryColor = randomColor();
  seedNumber = Math.floor(Math.random() * 50);

  localStorage.setItem('primaryColor', primaryColor);
  localStorage.setItem('seedNumber', seedNumber);
}

const terms = document.getElementsByClassName('term');
const numberOfTerms = terms.length;
let randomColorArray = randomColor({
  hue: primaryColor,
  count: numberOfTerms,
  seed: seedNumber,
});

let greyColorArray = randomColor({
  hue: 'monochrome',
  count: numberOfTerms,
  seed: seedNumber,
});

// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
const pickTextColorBasedOnBgColor = (bgColor) => {
  if (bgColor) {
    var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    // return r * 0.299 + g * 0.587 + b * 0.114 > 180 ? 'black' : 'white';
    return r * 0.299 + g * 0.587 + b * 0.114 > 80 ? 'black' : 'white';
  } else {
    return 'black';
  }
};

const changeTermColors = (color) => {
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    const randomColorValue = randomColorArray[i];
    const greyColorValue = greyColorArray[i];
    term.style.backgroundColor = color ? greyColorValue : randomColorValue;
    term.style.color = pickTextColorBasedOnBgColor(
      color ? greyColorValue : randomColorValue
    );
  }
};

changeTermColors();
