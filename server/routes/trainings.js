const express = require('express');
const router = express.Router();
const controllerTrainings = require('../controllers/trainings');

router.post('/trainings', controllerTrainings.getRoot);

module.exports = router;
