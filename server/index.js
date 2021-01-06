const app = require('./app');

const host = '127.0.0.1';
const port = 3000;
const urlDB = 

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


app.listen(port, host, async (req, res) => {
   await console.log(`Server lives on ${port}:${host}`);

})
