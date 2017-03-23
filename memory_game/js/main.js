//console.log("Up and running!");

alert('Hello, friends.');

// var cardOne = "queen"; var cardTwo = "king"; var cardThree = "queen"; var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];

//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardsInPlay[0]);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardsInPlay[2])
//console.log("User flipped " + cardFour);

//if (cardsInPlay.length === 2) {
	//if (cardsInPlay[0] === cardsInPlay[2]) {
	//	alert("Congratulations! You found a match!");
	//} else {
	//	alert("Sorry, try again.")
	//}
//}
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}



var flipCard = function (cardId) {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("User flipped " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
		alert(checkForMatch);
	} else {
		alert(checkForMatch);
	}
  }
};

flipCard(0);
flipCard(2);
//cardsInPlay.push(cards[cardId]);
