import _ from 'lodash';


const SUITS = ["CLUBS", "SPADES", "HEARTS", "DIAMONDS"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE" ];


export function createDeck(){
    let allCards = [];
    _.each(SUITS, function(suit){
        _.each(VALUES, function(value){
            allCards.push(createCard(suit, value));
        });
    });

    allCards = addJokers(allCards);
    return allCards;
}

export function shuffleDeck(sortedDeck){
    return _.shuffle(sortedDeck);
}

function createCard(suit, value, joker: false){
    return {
        cardSuit: suit,
        cardValue: value,
        isJoker: joker
    };
}

function addJokers(currentDeck){
    //Check here to see if jokers already exist
    currentDeck.push(createCard("JOKER", "HIGH", true));
    currentDeck.push(createCard("JOKER", "LOW", true));

    return currentDeck;
}
