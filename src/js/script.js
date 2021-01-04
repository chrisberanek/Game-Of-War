
/*
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 */

class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}
//create a class called Deck and populate the Deck array with all 52 cards (objects)
//give each card object the properties of suit, rank, score (value)

class Deck {
    constructor () {
        this.suit = ['HEARTS','DIAMONDS', 'CLUBS', 'SPADES']
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "JACK", "QUEEN", "KING", "ACE"]
        this.score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        this.cards = []
        this.length = 52
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.rank.length; j++) {
                let card = new Card(this.suit[i], this.rank[j], this.score[j])
                this.cards.push(card)
            }
        }   
    }
  
//  Shuffle Deck if required - computer does this by default when code is initialized
//math.floor function
  
    shuffle = () => {
        for (let i = this.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = holder;
        }    
    }
}

// Create a player class to define to opposing players and key properties

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.cardsInPlay = [];
    }
}

// Define a Game class to keep track of game progress

class Game { 
    constructor() {
        this.round = 0
        this.winPile = []
        this.players = [new Player ("Player One"), new Player ("Player Two")]
        this.deck = new Deck ()
        this.deck.shuffle();
    } 
    deal() {    
        for (let i = 0; i < this.deck.length; i++) {
            if (i % 2 === 0) {
                this.players[0].hand.unshift(this.deck.cards[i])
            } else {
                this.players[1].hand.unshift(this.deck.cards[i])
            }
        }
        this.deck = []
        this.startRound()
    }
    startRound() {
        this.round += 1;
        this.flipCards();
    }
    flipCards() {
        this.players[0].cardsInPlay.unshift(this.players[0].hand[0]);
        this.players[0].hand.shift();
        this.players[1].cardsInPlay.unshift(this.players[1].hand[0]);
        this.players[1].hand.shift();
        console.log(`${this.players[0].name} flips ${this.players[0].cardsInPlay[0].rank} of ${this.players[0].cardsInPlay[0].suit}\n${this.players[1].name} flips ${this.players[1].cardsInPlay[0].rank} of ${this.players[1].cardsInPlay[0].suit}`)
        this.compareRank();
    }
    collectCards(a,b) {
        this.players[a].hand.push(...this.winPile);
        this.players[a].hand.push(...this.players[a].cardsInPlay, ...this.players[b].cardsInPlay);
        this.players[a].cardsInPlay = []
        this.players[b].cardsInPlay = []
        this.winPile = [];
        console.log(`${this.players[a].name} wins Round ${this.round}! \n\n  ${this.players[a].name}: ${this.players[a].hand.length} Cards \n  ${this.players[b].name}: ${this.players[b].hand.length} cards`)
        this.checkGame()
    }
    compareRank() {
        if (this.players[0].cardsInPlay[0].score > this.players[1].cardsInPlay[0].score) {
            this.collectCards(0,1);
        } else if (this.players[0].cardsInPlay[0].score < this.players[1].cardsInPlay[0].score) {
            this.collectCards(1,0)
        } else {
            if (this.players[0].hand.length === 0) {
                this.winnerMessage(this.players[1].name)
            } else if (this.players[1].hand.length === 0) {
                this.winnerMessage(this.players[0].name)
            } else {
            this.startWar();
        }
    }
}
    
    checkGame() {
        if (this.players[0].hand.length === 0) {
            this.winnerMessage(this.players[1].name)
        } else if (this.players[1].hand.length === 0) {
            this.winnerMessage(this.players[0].name)
        } else {
            this.startRound();
        }
    }

    winnerMessage(player) {
        console.log(`Congratulations, ${player}!\n YOU ARE VICTORIOUS!!`)
    }

    startWar() {

            for (let i = 0; i < 3; i++) {
                if (i >= this.players[0].hand.length - 1){
                } else{
                    this.winPile.unshift(this.players[0].hand[0]);
                    this.players[0].hand.shift()
                }
            }   
            for (let i = 0; i < 3; i++) {
                if (i >= this.players[1].hand.length - 1){
                } else{
                    this.winPile.unshift(this.players[1].hand[0]);
                    this.players[1].hand.shift()
                }
            }
            console.log("THIS IS WAR!!!!!");
            this.flipCards();
        }
}

let game = new Game()
game.deal()


newGame = () => {
    game.deck = new Deck();
    game.players[0].hand = [];
    game.players[1].hand = [];
    game.winPile = [];
    game.players[0].cardsInPlay = [];
    game.players[1].cardsInPlay = [];
    game.round = 0;
    game.deck.shuffle();
    game.deal();
 }

// display results in html
//function displayResult(result) {
//    document.querySelector('h1')?.remove();              
//    const resultText = document.createElement('h1');
//    resultText.innerText = result;
//    document.body.appendChild(resultText);
//}