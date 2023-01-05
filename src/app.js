/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // pick a suit
  let icon;
  switch (Math.floor(Math.random() * 4) + 1) {
    case 1:
      icon = "♥";
      break;
    case 2:
      icon = "♦";
      break;
    case 3:
      icon = "♣";
      break;
    case 4:
      icon = "♠";
  }

  // pick a card
  let cardNumber;
  switch (Math.floor(Math.random() * 12) + 1) {
    case 1:
      cardNumber = "A";
      break;
    case 2:
      cardNumber = 2;
      break;
    case 3:
      cardNumber = 3;
      break;
    case 4:
      cardNumber = 4;
      break;
    case 5:
      cardNumber = 5;
      break;
    case 6:
      cardNumber = 6;
      break;
    case 7:
      cardNumber = 7;
      break;
    case 8:
      cardNumber = 8;
      break;
    case 9:
      cardNumber = 9;
      break;
    case 10:
      cardNumber = "J";
      break;
    case 11:
      cardNumber = "Q";
      break;
    case 12:
      cardNumber = "K";
      break;
  }

  console.log(icon, cardNumber);

  document.getElementsByClassName("icon")[0].innerHTML = icon;

  document.getElementsByClassName("cardNumber")[0].innerHTML = cardNumber;

  if (icon == "♥") {
    var element = document.getElementsByClassName("icon");
    element.style.color = "red;";
  }
};
