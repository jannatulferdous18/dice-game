var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "dice".concat("", randomNumber1).concat(".", "png");

var newSrcLeft = "./images/".concat(imageSource1);

const leftDice = document.getElementsByClassName("img1")[0];

leftDice.src = newSrcLeft;

var randomRightNumber = Math.floor(Math.random() * 6) + 1;

var img2Resource = "dice".concat("", randomRightNumber).concat(".", "png");

var newSrcRight = "./images/".concat(img2Resource);

const rightDice = document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", newSrcRight);

var showWinnerName = document.querySelector("h1");

if (randomNumber1 > randomRightNumber) {
  showWinnerName.innerHTML = "He Wins! 🚩";
} else if (randomNumber1 < randomRightNumber) {
  showWinnerName.innerHTML = "She Wins! 🚩";
} else {
  showWinnerName.innerHTML = "Draw!";
}
