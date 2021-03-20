require('dotenv').config();
const express = require('express');
const app = require('./app');

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const mongoose = require('mongoose');

app.use(express.json());

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.lpset.mongodb.net/gymApp?retryWrites=true&w=majority`,
      { useUnifiedTopology: true, useNewUrlParser: true },
    );
    app.listen(PORT, HOST, (req, res) => {
      console.log(`Server lives on ${PORT}:${HOST}`);
      // console.log(process.env);
    });
  } catch (exeption) {
    console.log(exeption);
  }
}

start();
