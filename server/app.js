const app = require('express')();
const cors = require('cors');
const router = require('./routes/index');
const bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.use('/api', router);

app.use(cors());

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// );
// app.use(bodyParser.json());

module.exports = app;
