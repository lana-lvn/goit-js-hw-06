function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector('.widget');
const colorSpanEl = widgetEl.querySelector('.color');
const changeColorBtn = widgetEl.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColor)
  
function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
};