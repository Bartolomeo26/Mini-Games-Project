const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const simonController = require('../controllers/simon_says')

router.route('/')
    .get(simonController.displayGame)
    .post(catchAsync(simonController.saveResult))

module.exports = router;
