const express = require('express');
const router = express.Router();

const {PENCalculator} = require('../controllers/CalculatorController');

router.post("/PENcalculator", PENCalculator);

module.exports = router;