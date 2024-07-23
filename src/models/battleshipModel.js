const db = require('../database/database.db');

const createGame = (grid, status, callback) => {
    db.run('INSERT INTO game (grid, status) VALUES (?, ?)', [grid, status], function(err) {
      if (err) return callback(err);
      callback(null, this.lastID);
    });
  };
  
const getGame = (id, callback) => {
    db.get('SELECT * FROM game WHERE id = ?', [id], callback);
  };
  
const updateGame = (id, grid, status, callback) => {
    db.run('UPDATE game SET grid = ?, status = ? WHERE id = ?', [grid, status, id], callback);
  };
  
  module.exports = { createGame, getGame, updateGame };
