const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/api', require('./routes/trainings'));



module.exports = app