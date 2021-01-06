const app = require('./app');

const host = '127.0.0.1';
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


async function start() {
   try {
      const urlDB = `mongodb+srv://logunik:dan555dan@cluster0.6kbtk.mongodb.net/users`

      await mongoose.connect(urlDB, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });





      app.listen(port, host, async (req, res) => {
         await console.log(`Server lives on ${port}:${host}`);

      })
   } catch (exeption) {
      console.log(exeption);
   }
}

start();


