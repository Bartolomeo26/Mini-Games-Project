const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

router.route('/')
    .get((req, res) => { res.render('games/numbers') })
//.post(catchAsync(words.saveResults))

module.exports = router;
