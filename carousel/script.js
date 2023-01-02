var radius = 235;
var autoRotate = true;
var rotateSpeed = 100;
var imgWidth = 100;
var imgHeight = 150;

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImageLinks = ospin.getElementsByClassName('image-link');
// var aImg = ospin.getElementsByTagName('img');
var aEle = [...aImageLinks];

ospin.style.width = imgWidth + 'px';
ospin.style.height = imgHeight + 'px';

function init() {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      'rotateY(' +
      i * (360 / aEle.length) +
      'deg) translateZ(' +
      radius +
      'px)';
  }
}

init();

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

if (autoRotate) {
  var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}
