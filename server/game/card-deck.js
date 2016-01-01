import _ from 'lodash';

const SUITS = ["CLUB", "SPADE", "HEART", "DIAMOND"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
const POINT_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17]; //Jack of the suit will start at 14, Off-Jack will be assigned 13.

export function createDeck() {
  let allCards = [];
  _.each(SUITS, function(suit) {
    _.each(VALUES, function(value, index) {
      allCards.push(createCard(suit, value));
    });
  });

  allCards = addJokers(allCards);
  return allCards;
}

export function shuffleDeck(sortedDeck) {
  return _.shuffle(sortedDeck);
}

export function isSameSuit(card1, card2) {
  return card1.suit == card2.suit ? true : false;
}

export function isOffSuit(card1, card2) {
  let suitPairs = { black: ['SPADE', 'CLUB'], red: ['HEART', 'DIAMOND'] };
  let colors = _.map([card1, card2], function(card) {
    return _.findKey(suitPairs, function(pair) {
      return pair.indexOf(card.suit) !== -1;
    });
  });
  
  return _.uniq(colors).length === 1 && card1.suit !== card2.suit;
}

function createCard(suit, value, index, joker = false) {
  return {
      suit: suit,
      value: value,
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

export function isJoker(card) {
  return card.suit === "JOKER";
}

export function isTrump(suit, card = {}) {
  if (suit === card.suit) return true;
  if (isOffSuit({ suit }, card) && card.value === "JACK") return true;
  if (isJoker(card)) return true;
  return false;
}

export function updatePointValue(suit, card = {}) {
  card = _.assign({}, card);
  if (isOffSuit({ suit }, card) && card.value === "JACK") {
    card.points = 13;
  }
  return card;
}