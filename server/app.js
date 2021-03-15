const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/index');

app.use('/api', router);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
