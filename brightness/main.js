const centerEl = document.querySelector('.center');
const spriteEl = document.querySelector('.sprite');
const valueEl = document.querySelector('.value');
const sliderEl = document.querySelector('.mood__slider');
let width, height, frame = 0;

resize();
window.addEventListener('resize', resize);

function resize(){
  width = centerEl.clientWidth;
  height = width * 0.5625;
  spriteEl.style.height = `${height}px`;
    spriteEl.style.width = `${width}px`;
  spriteEl.style.backgroundPositionY = `-${height*frame}px`;
}


const onSliderInput = e => {
  frame = sliderEl.value;
  spriteEl.style.backgroundPositionY = `-${height*frame}px`;

}


function map (value, start1, stop1, start2, stop2) {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  }



