import _ from 'lodash';

export function deal(game) {
  if (!game.deck) throw new Error("No game deck");
  if (!game.players) throw new Error("No players");
  
  _.each(new Array(9), function() {
    eachPlayerStartingAfterDealer(game, function(player) {
      if (!player.hand) player.hand = [];
      player.hand.push(game.deck.shift());
    });
  });
  
  return game;
}

export function eachPlayerStartingAfterDealer(game, cb) {
  let afterDealer = [];
  let beforeDealer = [];
  
  _.each(game.players, function(player, index) {
    if (index > game.currentDealer) {
      afterDealer.push(player);
    }
    else {
      beforeDealer.push(player);
    }
  });
  let sortedPlayerArray = afterDealer.concat(beforeDealer);
  
  _.each(sortedPlayerArray, function(player) {
    cb(player);
  });
}

export function changeDealer(game) {
  if (!game.players) throw new Error("No players");
  if (!game.currentDealer || game.currentDealer + 1 >= game.players.length) {
    game.currentDealer = 0;
  }
  else {
    game.currentDealer = game.currentDealer + 1;
  }
  
  _.each(game.players, function(player) {
    player.dealer = false;
  });
  game.players[game.currentDealer].dealer = true;
  
  return game;
}