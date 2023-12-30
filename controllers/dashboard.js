const Game = require('../models/game');


module.exports.displayWordScoreboard = async (req, res) =>
{
    const game = await Game.findOne({ name: 'Word Game' }).populate({ path: "scoreboard", populate: { path: "user" } });
    const path = req.path;
    const scoreboard = game.scoreboard;
    scoreboard.sort((a, b) =>
    {
        const nameA = a.user.username;
        const nameB = b.user.username;
        if (nameA < nameB)
        {
            return -1;
        }
        if (nameA > nameB)
        {
            return 1;
        }


        return 0;
    }).sort((a, b) => b.score - a.score);
    res.render('dashboard', { scoreboard, game, path });

}
module.exports.displayCountryScoreboard = async (req, res) =>
{
    const game = await Game.findOne({ name: 'Country Game' }).populate({ path: "scoreboard", populate: { path: "user" } });
    const path = req.path;
    const scoreboard = game.scoreboard;
    scoreboard.sort((a, b) =>
    {
        const nameA = a.user.username;
        const nameB = b.user.username;
        if (nameA < nameB)
        {
            return -1;
        }
        if (nameA > nameB)
        {
            return 1;
        }


        return 0;
    }).sort((a, b) => a.score - b.score);
    res.render('dashboard', { scoreboard, game, path });

}
module.exports.displayNumberScoreboard = async (req, res) =>
{
    const game = await Game.findOne({ name: 'Number Sequence' }).populate({ path: "scoreboard", populate: { path: "user" } });
    const path = req.path;
    const scoreboard = game.scoreboard;
    scoreboard.sort((a, b) =>
    {
        const nameA = a.user.username;
        const nameB = b.user.username;
        if (nameA < nameB)
        {
            return -1;
        }
        if (nameA > nameB)
        {
            return 1;
        }


        return 0;
    }).sort((a, b) => b.score - a.score);
    res.render('dashboard', { scoreboard, game, path });

}
module.exports.displaySimonScoreboard = async (req, res) =>
{
    const game = await Game.findOne({ name: 'Simon Says' }).populate({ path: "scoreboard", populate: { path: "user" } });
    const path = req.path;
    const scoreboard = game.scoreboard;
    scoreboard.sort((a, b) =>
    {
        const nameA = a.user.username;
        const nameB = b.user.username;
        if (nameA < nameB)
        {
            return -1;
        }
        if (nameA > nameB)
        {
            return 1;
        }


        return 0;
    }).sort((a, b) => b.score - a.score);
    res.render('dashboard', { scoreboard, game, path });

}

