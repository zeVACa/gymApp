const express = require('express');
const app = express();

app.use('/api', require('./routes/trainings'));



module.exports = app