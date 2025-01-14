const changeColor = document.querySelector('.widget');
const textColorSpan = document.querySelector('.color')

changeColor.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  changeColor.style.backgroundColor = randomColor;
  textColorSpan.textContent = randomColor;
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
