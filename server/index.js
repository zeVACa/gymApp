require('dotenv').config();
const app = require('./app');

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const mongoose = require('mongoose');

async function start() {
  try {
    const urlDB = `mongodb+srv://${process.env.dbLogin}:${process.env.dbPassword}@cluster0.6kbtk.mongodb.net/users`;

    //  await mongoose.connect(urlDB, {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true,
    //  });

    app.listen(PORT, HOST, async (req, res) => {
      await console.log(`Server lives on ${PORT}:${HOST}`);
    });

    app.get('/', (req, res) => {
      res.send('hello from /');
    });
  } catch (exeption) {
    console.log(exeption);
  }
}

start();
