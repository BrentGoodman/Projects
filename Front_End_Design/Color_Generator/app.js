const colors = ["Red", "Green", "Blue", "Yellow", "Violet", "Orange", "Teal", "Purple", "#FF0000", "#FF00FF", "#008000", "#FFFF00", "#0000FF", "#008080", "#800080", "rgb(255, 0, 0)", "rgb(128, 0, 128)", "rgb(0, 128, 0)", "rgb(255, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 128)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});


