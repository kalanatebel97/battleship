const express = require('express');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

app.use(express.json());
app.use('/api/game', gameRoutes);
app.use((req, res) => {
    res.status(404).send('Not Found');
  });
module.exports = app;
