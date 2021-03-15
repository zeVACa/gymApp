const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');

router.post('/register', controllerAuth.register);
router.post('/login', controllerAuth.login);
// router.get('/auth', );

module.exports = router;
