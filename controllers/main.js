const mainView = require('../views/main')
const mainModel = require('../models/main')
const Game = require('../models/game')
const { sleepFunction } = require('../utils/sleepFunction');

const mainController = {
    saveResultIfLoggedIn: async function (score, gameName)
    {
        if (mainModel.loggedIn)
        {
            mainView.showMessage("Do you want to save result?(y/n)")
            let answer = await mainView.getUserInput();
            if (answer === 'y')
            {
                const game = await Game.findOne({ name: gameName })
                game.scoreboard.push({ user: mainModel.loggedUser._id, score })
                await game.save().then(() => mainView.showMessage("Successfully saved!"));

            }
            else mainView.showMessage("Your result was not saved!");

        }
    },
    noSuchOption: async function ()
    {
        mainView.showMessage(`Sorry, there is no such option!`);
        await sleepFunction(2000);
        console.clear();
    },
    loggingIn: async function ()
    {
        if (mainModel.loggedUser) { mainModel.loggedIn = true; mainView.showMessage(`Logged in successfully!`); }
        else mainView.showMessage(`Invalid username or password!`);
    },
    loggingOut: function ()
    {
        if (mainModel.loggedIn) { mainModel.loggedIn = false; mainView.showMessage(`Logged out successfully!`); return true; }
    }
}

module.exports = mainController;