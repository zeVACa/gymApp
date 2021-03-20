const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');

router.post('/register', controllerAuth.register);
router.post('/login', controllerAuth.login);
router.get('/users', controllerAuth.getUsers);

module.exports = router;
