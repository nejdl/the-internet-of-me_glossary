// console.log('hi') 


// MOUSEMOVE EVENT LISTENER
const body = document.body;
const circle = document.getElementById("circle");

body.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  // console.log(mouseX, mouseY);

  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});

// TOUCHMOVE EVENT LISTENER
body.addEventListener("touchmove", function () {
  const touch = e.touches[0];
  const touchX = e.touch.clientX;
  const touchY = e.touch.clientY;
  // console.log(touchX, touchY);

  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});
