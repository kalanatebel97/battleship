const {
  createNewGame,
  processShot,
  fetchGameById,
} = require("../services/battleshipService.js");

// Initiate a new game
const startGame = (req, res) => {
  createNewGame(
    (gameId) => {
      res.status(201).json({ gameId });
    },
    (err) => {
      res.status(500).send(`Error starting the game: ${err.message}`);
    }
  );
};

// Take a shot in the game
const takeShot = (req, res) => {
  const { id } = req.params;
  const { shot } = req.body;

  if (!shot) {
    return res.status(400).send("Shot coordinate is required");
  }

  processShot(
    id,
    shot,
    (result) => {
      res.status(200).json(result);
    },
    (err) => {
      res.status(500).send(`Error processing the shot: ${err.message}`);
    }
  );
};

// Get game details by ID
const getGameById = (req, res) => {
  const { id } = req.params;

  fetchGameById(
    id,
    (game) => {
      if (!game) {
        return res.status(404).send("Game not found");
      }
      res.status(200).json(game);
    },
    (err) => {
      res.status(500).send(`Error fetching the game: ${err.message}`);
    }
  );
};

module.exports = { startGame, takeShot, getGameById };
