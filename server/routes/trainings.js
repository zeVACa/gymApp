const express = require('express');
const router = express.Router();
const controllerTrainings = require('../controllers/trainings');

router.get('/', controllerTrainings.getRoot);




module.exports = router;