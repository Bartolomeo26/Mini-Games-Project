const Game = require('../models/game');
const Word = require('../models/word');

module.exports.displayGame = async (req, res) =>
{
    const words = await Word.find({});
    res.render('games/words', {words});

}
module.exports.saveResult = async (req, res) =>
{
    const wordGame = await Game.findOne({ name: 'Word Game' });
    const userScore = { user: req.user, score: req.body.score };
    
    wordGame.scoreboard.push(userScore);
    await wordGame.save();
    res.redirect('/words');

}
