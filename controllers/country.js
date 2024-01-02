const Game = require('../models/game');
const Country = require('../models/country');

module.exports.displayGame = async (req, res) =>
{
    const countries = await Country.find({});
    res.render('games/countries', {countries});

}
module.exports.saveResult = async (req, res) =>
{
    const countryGame = await Game.findOne({ name: 'Country Game' });
    const userScore = { user: req.user, score: req.body.score };
    
    countryGame.scoreboard.push(userScore);
    await countryGame.save();
    res.redirect('/countries');

}
