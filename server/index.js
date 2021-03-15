const app = require('./app');

const host = '127.0.0.1';
const port = process.env.PORT;

const mongoose = require('mongoose');

async function start() {
  try {
    //  const urlDB = `mongodb+srv://logunik:dan555dan@cluster0.6kbtk.mongodb.net/users`;

    //  await mongoose.connect(urlDB, {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true,
    //  });

    app.listen(port, host, async (req, res) => {
      await console.log(`Server lives on ${port}:${host}`);
    });

    app.get('/', (req, res) => {
      res.send('hello from /');
    });
  } catch (exeption) {
    console.log(exeption);
  }
}

start();
