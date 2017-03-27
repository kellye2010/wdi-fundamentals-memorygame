//console.log("Up and running!");

alert('Get Ready!');

//var cardOne = "queen"; var cardTwo = "king"; var cardThree = "queen"; var cardFour = "king";
//var cards = ["queen", "queen", "king", "king"];

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"	
	}
];
var cardsInPlay =[];
//var cardId = []

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
};



// var flipCard = function () {

// 	if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		console.log("User flipped " + cards[cardId].rank);
// 		cardsInPlay.push(cards[cardId].rank);
// 		console.log(cards[cardId].suit);
// 		console.log(cards[cardId].cardImage);
// 		alert(checkForMatch);
// 		this.getAttribute('data-id');
// 	} else {
// 		alert(checkForMatch);
// 	}
//   }
// };


var flipCard = function () {
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	//console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};


//flipCard(0);
//flipCard(2);

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
  		cardElement.setAttribute('src', 'images/back.png');
  		cardElement.setAttribute('data-id', i);
  		cardElement.addEventListener('click', flipCard);
  		document.getElementById('game-board').appendChild(cardElement);
  }

};



createBoard();
