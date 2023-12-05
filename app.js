const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const { countryGame } = require('./controllers/country');
const { simonSaysGame } = require('./controllers/simon_says');
const { wordGame } = require('./controllers/word');
const { numberSequenceGame } = require('./controllers/number_sequence');
const { sleepFunction } = require('./utils/sleepFunction');
const { sortDesc, sortAsc } = require('./utils/sortingFunctions');
const Game = require('./models/game')
const mainView = require('./views/main')
const mainModel = require('./models/main');
const user = require('./controllers/user');
const mainController = require('./controllers/main');
const app = express();

main()
    .catch(err => console.log(err));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project');
}
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);

app.listen('3000', () =>
{
})


let interface = async () =>
{
    while (true)
    {
        mainView.displayMenu(mainModel.loggedIn);
        let option = await mainView.getUserInput();
        console.clear();
        switch (option)
        {
            case '1':
                mainView.showMessage('Choose one of the games:');
                mainView.displayGameOptions();
                let gameOption = await mainView.getUserInput();
                console.clear();
                switch (gameOption)
                {
                    case '1':
                        mainView.showMessage("Guess which country it is based on the clues from the previous types!")
                        await sleepFunction(2000);
                        const countryScore = await countryGame();
                        await mainController.saveResultIfLoggedIn(countryScore, "Country Game");
                        await sleepFunction(2000);

                        console.clear();
                        break;
                    case '2':
                        mainView.showMessage("Remember the displayed words in order to properly guess whether one of them already appeared on the screen before or not!")
                        await sleepFunction(2000);
                        const wordScore = await wordGame();
                        await mainController.saveResultIfLoggedIn(wordScore, "Word Game");
                        await sleepFunction(2000);

                        console.clear();
                        break;
                    case '3':
                        mainView.showMessage("Remember an increasingly long pattern of signs(numbers)!")
                        await sleepFunction(2000);
                        const simonSaysScore = await simonSaysGame();
                        await mainController.saveResultIfLoggedIn(simonSaysScore, "Simon Says");
                        await sleepFunction(2000);

                        console.clear();
                        break;
                    case '4':
                        mainView.showMessage("Remember increasingly long numbers!")
                        await sleepFunction(2000);
                        const numberSequenceScore = await numberSequenceGame();
                        await mainController.saveResultIfLoggedIn(numberSequenceScore, "Number Sequence");
                        await sleepFunction(2000);

                        console.clear();
                        break;
                    case '5':
                        break;
                    default:
                        await mainController.noSuchOption();

                }
                break;
            case '2':
                mainView.showMessage('The scoreboard of which game do you wish to see?:');
                mainView.displayGameOptions();
                let scoreboardOption = await mainView.getUserInput();
                let game = null;
                console.clear();
                switch (scoreboardOption)
                {
                    case '1':
                        game = await Game.findOne({ name: "Country Game" }).populate({ path: "scoreboard", populate: { path: "user" } })
                        await mainView.displayGameScoreboard(game, sortAsc);
                        break;
                    case '2':
                        game = await Game.findOne({ name: "Word Game" }).populate({ path: "scoreboard", populate: { path: "user" } })
                        await mainView.displayGameScoreboard(game, sortDesc);
                        break;
                    case '3':
                        game = await Game.findOne({ name: "Simon Says" }).populate({ path: "scoreboard", populate: { path: "user" } })
                        await mainView.displayGameScoreboard(game, sortDesc);
                        break;
                    case '4':
                        game = await Game.findOne({ name: "Number Sequence" }).populate({ path: "scoreboard", populate: { path: "user" } })
                        await mainView.displayGameScoreboard(game, sortDesc);
                        break;
                    case '5':
                        break;

                    default:
                        await mainController.noSuchOption();

                }
                break;
            case '3':
                if (!mainController.loggingOut())
                    await user.addUser();
                await sleepFunction(2000);
                console.clear();
                break;
            case '4':
                mainModel.loggedUser = await user.logIn();
                await mainController.loggingIn();
                await sleepFunction(2000);
                console.clear();
                break;
            default:
                await mainController.noSuchOption();
                break;

        }

    }
}

interface();