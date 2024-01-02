const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const countryController = require('../controllers/country');


router.route('/')
    .get(countryController.displayGame)
    .post(catchAsync(countryController.saveResult));


module.exports = router;
