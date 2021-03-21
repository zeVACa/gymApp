const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');
const { check } = require('express-validator');

router.post(
  '/register',
  [
    check('username', 'имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль не может быть короче 8 символов и больше 20 символов').isLength({
      min: 8,
      max: 20,
    }),
  ],
  controllerAuth.register,
);
router.post('/login', controllerAuth.login);
router.get('/users', controllerAuth.getUsers);

module.exports = router;
