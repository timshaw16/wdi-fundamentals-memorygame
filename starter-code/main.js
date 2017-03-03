console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardThree) {
    alert("You found a match!");
} else {
    alert("Not a match, try again!");
}*/

var gameBoard = document.getElementById('game-board');

var createCards = function() {
	for (var i=0; i<4; i++){	
var cardsElement = document.createElements('div');
		cardsElement.className = 'card';
		gameBoard.appendChild(gameBoard);
	}

}