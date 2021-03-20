// const validator = require('express-validator');
const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  try {
    // const { userName, password } = req.body;
    const { userName, password } = req.body;

    console.log(userName, password);
    // const candidate = await User.findOne({});
    // res.json({ test: 'Test' });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Registration error' });
  }
  res.send('hello from registerrrrrrr ');
};

module.exports.login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Login error' });
  }
  res.status(200).json({ message: 'hello from login login ' });
};

module.exports.getUsers = async (req, res) => {
  try {
    console.log('/users');
    res.json('get users');
  } catch (e) {}
};
