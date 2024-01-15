const Game = require('../models/game');
const numberSequenceModel = require('../models/number_sequence');

module.exports.displayGame = (req, res) =>
{

    res.render('games/numbers', {numberSequenceModel});
    

}
module.exports.saveResult = async (req, res) =>
{
    const numberGame = await Game.findOne({ name: 'Number Sequence' });

    const userScore = { user: req.user, score: req.body.score };
    
    numberGame.scoreboard.push(userScore);
    await numberGame.save();
    res.redirect('/number-sequence');

}
