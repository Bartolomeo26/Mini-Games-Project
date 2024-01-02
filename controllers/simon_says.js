const Game = require('../models/game');

module.exports.displayGame = (req, res) =>
{

    res.render('games/simon_says');

}
module.exports.saveResult = async (req, res) =>
{
    const simonGame = await Game.findOne({ name: 'Simon Says' });

    const userScore = { user: req.user, score: req.body.score };
    
    simonGame.scoreboard.push(userScore);
    await simonGame.save();
    res.redirect('/simon-says');

}
