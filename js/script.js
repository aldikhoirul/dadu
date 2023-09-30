const diceImg = document.querySelectorAll("img");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const btn = document.querySelector(".btn");

const images = ["./assets/daduu1.png", "./assets/daduu2.png", "./assets/daduu3.png", "./assets/daduu4.png", "./assets/daduu5.png", "./assets/daduu6.png"];

let randomRoll = () => {
  let diceOneValue = Math.floor(Math.random() * 6);
  let diceTwoValue = Math.floor(Math.random() * 6);
  dice1.src = images[diceOneValue];
  dice2.src = images[diceTwoValue];
};

let rollDice = () => {
  diceImg.forEach((dice) => {
    dice.classList.add("shake");
  });
  setTimeout(() => {
    diceImg.forEach((dice) => {
      dice.classList.remove("shake");
    });
    randomRoll();
  }, 800);
};

rollDice();
btn.addEventListener("click", rollDice);
