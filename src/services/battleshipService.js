const { createGame, getGame, updateGame } = require('../models/battleshipModel.js');

const staticGrid = [
  ["S", "S", "S", "S", "S", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];


const createNewGame = (onSuccess, onError) => {
  createGame(JSON.stringify(staticGrid), 'ongoing', (err, game) => {
    if (err) return onError(err);
    onSuccess(game);
  });
};


const processShot = (id, shot, onSuccess, onError) => {
  getGame(id, (err, game) => {
    if (err) return onError(err);
    
    const grid = JSON.parse(game.grid);
    const row = shot.charCodeAt(0) - 'A'.charCodeAt(0);
    const col = parseInt(shot.slice(1)) - 1;

    if (grid[row][col] === 'H' || grid[row][col] === 'M') {
      return onSuccess({ result: 'Already Shot' });
    }

    if (grid[row][col] === 'S') {
      grid[row][col] = 'H'; // Mark hit
      const status = checkGameStatus(grid);
      updateGame(id, JSON.stringify(grid), status, (err) => {
        if (err) return onError(err);
        onSuccess({ result: 'Hit', status });
      });
    } else {
      grid[row][col] = 'M'; // Mark miss
      updateGame(id, JSON.stringify(grid), game.status, (err) => {
        if (err) return onError(err);
        onSuccess({ result: 'Miss' });
      });
    }
  });
};


const checkGameStatus = (grid) => {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (grid[row][col] === 'S') {
        return 'ongoing';
      }
    }
  }
  return 'won';
};


const fetchGameById = (id, onSuccess, onError) => {
  getGame(id, (err, game) => {
    if (err) return onError(err);
    onSuccess(game);
  });
};

module.exports = { createNewGame, processShot, fetchGameById };
