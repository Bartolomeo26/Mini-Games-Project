const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const wordController = require('../controllers/word');

router.route('/')
    .get(wordController.displayGame)
    .post(catchAsync(wordController.saveResult))

module.exports = router;
