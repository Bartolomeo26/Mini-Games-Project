const numberSequenceModel = require('../models/number_sequence');
const { sleepFunction } = require('../utils/sleepFunction');
const numberSequenceView = require('../views/number_sequence');

module.exports.numberSequenceGame = async () =>
{
    while (true)
    {
        numberSequenceModel.generateRandomSequence();
        console.clear();
        numberSequenceView.showMessage(`That is the number: ${numberSequenceModel.randomNumber}`);
        await sleepFunction(2000);
        console.clear();
        let guessedNumber = await numberSequenceView.getUserInput();

        numberSequenceModel.setInput(guessedNumber);

        if (numberSequenceModel.checkInput())
        {
            numberSequenceModel.correctAnswers++;
            numberSequenceModel.score++;
            if (numberSequenceModel.correctAnswers % 2 === 0)
            {
                numberSequenceModel.increaseSequenceLength();
            }
        } else
        {
            numberSequenceView.showMessage(`You were wrong. Your result: ${numberSequenceModel.score} points!`);
            return numberSequenceModel.score;
        }
    }

}

