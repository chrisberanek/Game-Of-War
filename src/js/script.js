
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
    this.suit = suit;
    this.rank = rank;
    this.score = score;       
    }
}

//create a class called Deck and populate the Deck array with all 52 cards (objects)
//give each card object the properties of suit, rank, score (value)

 
 class Deck { 
    constructor () { 
        this.suit = ['Hearts','Diamonds', 'Clubs', 'Spades'] 
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"] 
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
//create a new deck instance named "newDeck" and start the game
  


//  Shuffle Deck if required - computer does this by default when code is initialized
   
/*
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }   


class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
} 
*/  
  
