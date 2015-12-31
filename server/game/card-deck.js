import _ from 'lodash';

const SUITS = ["CLUB", "SPADE", "HEART", "DIAMOND"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
const POINT_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17]; //Jack of the suit will start at 14, Off-Jack will be assigned 13.

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

export function isSameSuit(card1, card2){
    return card1.suit == card2.suit ? true : false;
}

export function isOffSuit(card1, card2){
    if(card1.suit == "CLUB"){
        if(card2.suit == "SPADE"){
            return true;
        } else {
            return false;
        }
    } else if(card1.suit == "SPADE"){
        if(card2.suit == "CLUB"){
            return true;
        } else {
            return false;
        }
    } else if (card1.suit == "HEART"){
        if(card2.suit == "DIAMON"){
            return true;
        } else {
            return false;
        }
    } else if (card1.suit == "DIAMOND"){
        if(card2.suit == "HEART"){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function createCard(cardSuit, cardValue, index, joker = false){
    return {
        suit: cardSuit,
        value: cardValue,
        points: POINT_VALUES[index],
        isJoker: joker
    };
}

function addJokers(currentDeck){
    //Check here to see if jokers already exist
    currentDeck.push(createCard("JOKER", "HIGH", 12, true));
    currentDeck.push(createCard("JOKER", "LOW", 11, true));

    return currentDeck;
}
