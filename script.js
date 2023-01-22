let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let turn = 1;
let number = 0;

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

shuffle(cards);

alert(cards);

function play(cards) {
  function checkWin(who, card) {
    alert(card);
    if (card == "Q") {
      alert(who + " win");
      return true;
    }
    return false;
  }
  let card;
  while (cards.length) {
    if (turn % 2 != 0) {
      number = +prompt("Take the card! 0-" + cards.length);
      if (isNaN(number) || (number > cards.length && number < 0)) return;
      let card = cards[number];
      if (checkWin("You ", card)) return;
    } else {
      number = Math.floor(Math.random(cards.length) + 1);
      let card = cards[number];
      if (checkWin("I ", card)) return;
    }
    cards.splice(number, 1);
    alert(cards);
    turn++;
  }
}
play(cards);
