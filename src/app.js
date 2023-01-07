/* eslint-disable */
import "bootstrap";
import "./style.css";

const suit = ["hearts", "diamonds", "spades", "clubs"];
const cardNum = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let card = document.querySelector(".card");
let cardNumber = document.querySelector(".card-number");

function getRndInteger(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  card.classList.add(suit[getRndInteger(suit)]);
  cardNumber.innerHTML = cardNum[getRndInteger(cardNum)];
};

window.hitMe = function hitMe() {
  card.classList.remove(card.classList[1]);

  card.classList.add(suit[getRndInteger(suit)]);

  cardNumber.innerHTML = cardNum[getRndInteger(cardNum)];
};

setInterval(hitMe, 10000);
