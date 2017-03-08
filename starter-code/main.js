console.log("JS file is connected to HTML! Woo!")

/*var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/if (cardTwo === cardThree) {
    alert("You found a match!");
} else {
    alert("Not a match, try again!");
}

for (var i = 0; i < 4; i++){
	var newCards = document.createElement('div');
		newCards.className = 'card';
		gameBoard.appendChild(newCards);
	}
}
	createCards();*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []; 
var board = document.getElementById('game-board');

function createBoard() { 
	for (i=0; i<cards.length; i++) { 
	var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='my_king.png'>";
	} 
  else {
		this.innerHTML = "<img src ='my_queen.png'>";
	}

if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay = [];
  this.innerHTML = " ";
	
  }
}

function isMatch(cards){
	if (cards[0] === cards[1]) {
		alert("You found a match!");
  }
  else {
		alert ("Sorry, try again.");
	}
}

createBoard();










