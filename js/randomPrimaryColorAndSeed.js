let primaryColor = localStorage.getItem('primaryColor');
let seedNumber = parseInt(localStorage.getItem('seedNumber'));
if (!primaryColor || !seedNumber) {
  primaryColor = randomColor();
  seedNumber = Math.floor(Math.random() * 50);

  localStorage.setItem('primaryColor', primaryColor);
  localStorage.setItem('seedNumber', seedNumber);
}
