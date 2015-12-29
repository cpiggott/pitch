import _ from 'lodash';


const SUITS = ["CLUB", "SPADE", "HEART", "DIAMOND"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE" ];
const POINT_VALUES = [2,3,4,5,6,7,8,9,10,14,15,16,17]; //Jack of the suit will start at 14, Off-Jack will be assigned 13.

export function createDeck(){
    let allCards = [];
    _.each(SUITS, function(suit){
        _.each(VALUES, function(value, index){
            allCards.push(createCard(suit, value));
        });
    });

    allCards = addJokers(allCards);
    return allCards;
}

export function shuffleDeck(sortedDeck){
    return _.shuffle(sortedDeck);
}

function createCard(suit, value, index, joker = false){
    return {
        cardSuit: suit,
        cardValue: value,
        pointValue: POINT_VALUES[index],
        isJoker: joker
    };
}

function addJokers(currentDeck){
    //Check here to see if jokers already exist
    currentDeck.push(createCard("JOKER", "HIGH", 12, true));
    currentDeck.push(createCard("JOKER", "LOW", 11, true));

    return currentDeck;
}
