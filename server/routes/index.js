const express = require('express');
const router = express.Router();

const userRouter = require('../routes/auth');

router.use('/user', userRouter);
// router.use('user');
// router.use('user');
// router.use('user');
// router.use('user');

module.exports = router;
