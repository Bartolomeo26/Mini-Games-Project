const prompt = require('prompt');
const { sleepFunction } = require('../utils/sleepFunction');
var center = require('center-align');
var term = require('terminal-kit').terminal;
var colors = require('colors');
prompt.start();

const mainView = {
    showMessage: function (message)
    {
        console.log(center(message, 149).brightCyan);
    },

    getUserInput: async function ()
    {
        let { option } = await prompt.get('option');
        return option;
    },
    displayMenu: function (loggedIn)
    {
        mainView.showMessage("GAMES TESTING KNOWLEDGE AND MEMORY OF THE PLAYER")
        mainView.showMessage("CHOOSE ONE OF THE OPTIONS")
        mainView.showMessage("1. Play")
        mainView.showMessage("2. See the best scores")
        if (!loggedIn)
        {
            mainView.showMessage("3. Sign in")
            mainView.showMessage("4. Log in")
        }
        else { mainView.showMessage("3. Log out") }
    },
    displayGameOptions: function ()
    {
        mainView.showMessage("1. Guess the Country!")
        mainView.showMessage("2. Remember the Words!")
        mainView.showMessage("3. Simon says!")
        mainView.showMessage("4. Remember the Number!")
        mainView.showMessage("5. Exit")
    },
    displayGameScoreboard: async function (game, sortType)
    {
        let scoreboard = null;
        scoreboard = game.scoreboard.sort(sortType).map((el, index) => { return [index + 1, el.user.username, el.score] })
        scoreboard.unshift(['Place', 'Username', 'Score']);
        if (scoreboard.length)
        {
            term.table(scoreboard, {
                hasBorder: true,
                contentHasMarkup: true,
                borderChars: 'lightRounded',
                borderAttr: { color: 'blue' },
                textAttr: { bgColor: 'default' },
                width: 60,

            }
            );
        }
        else
        {
            mainView.showMessage("No results saved!")
        }

        await sleepFunction(2000);
        console.clear();
    }
};

module.exports = mainView;
