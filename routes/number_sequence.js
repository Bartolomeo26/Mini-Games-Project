const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const numberController = require('../controllers/number');

router.route('/')
    .get(numberController.displayGame)
    .post(catchAsync(numberController.saveResult))

module.exports = router;
