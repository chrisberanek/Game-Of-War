
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
  
class Game {  

    constructor() { 

        this.round = 0 

        this.warPile = [] 

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

        console.log(`${this.players[0].name} flipped ${this.players[0].cardsInPlay[0].rank} of ${this.players[0].cardsInPlay[0].suit}\n\n${this.players[1].name} flipped ${this.players[1].cardsInPlay[0].rank} of ${this.players[1].cardsInPlay[0].suit}`) 

        this.compareRank(); 

    }   
