// const validator = require('express-validator');
const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports.register = async (req, res) => {
  try {
    // const { userName, password } = req.body;
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      res.status(400).json({ message: 'Ошибка при регистрации', errors: validationErrors });
    }

    const { username, password } = req.body;

    const candidate = await User.findOne({ username });
    // console.log('candidate is: ', candidate);

    if (candidate) {
      res.status(400).json({
        message: 'user is already registered',
        user: candidate,
      });
    }

    // console.log('req data: ', userName, password);

    const hashPassword = await bcrypt.hash(password, 7);
    const userRole = await Role.findOne({ value: 'USER' });
    const user = new User({ username: username, password: hashPassword, roles: [userRole.value] });
    await user.save();
    res.status(200).json({ mesage: 'user is registered sucessfully', user: user });

    // const hashedPass = bcrypt.hash();

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
    console.log(req.body);

    const candidate = req.body;

    const user = await User.findOne({ username: candidate.username });

    console.log('user from db', user);

    if (!user) {
      return res.status(401).json({ message: `user ${user.username} is unauthorised` });
    }

    res.status(200).json({ message: `user ${user.username} is authorised sucessfully` });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong with login' });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    console.log('/users');
    res.json('get users');
  } catch (e) {}
};
