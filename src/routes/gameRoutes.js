const express = require('express');
const { startGame, takeShot,getGameById } = require('../controllers/battleshipController');
const router = express.Router();

router.post('/start', startGame);
router.post('/:id/shot', takeShot);
router.get('/:id', getGameById);

module.exports = router;
