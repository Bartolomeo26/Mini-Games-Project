const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard');


router.get('/words', dashboardController.displayWordScoreboard);
router.get('/simon-says', dashboardController.displaySimonScoreboard);
router.get('/number-sequence', dashboardController.displayNumberScoreboard);
router.get('/countries', dashboardController.displayCountryScoreboard);



module.exports = router;
