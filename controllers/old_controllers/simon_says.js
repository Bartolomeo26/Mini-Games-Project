const simonView = require('../views/simon_says');
const simonModel = require('../models/simon_says');
const { sleepFunction } = require('../utils/sleepFunction');

module.exports.simonSaysGame = async () =>
{

    while (!simonModel.isOver)
    {
        simonModel.randomNumber = Math.floor(Math.random() * 4 + 1);
        simonModel.sequence.push(simonModel.randomNumber);
        for (let el of simonModel.sequence)
        {

            simonView.showMessage(`${el}`);
            await sleepFunction(1000);
            console.clear();
            await sleepFunction(200);

        }
        for (let i = 0; i < simonModel.sequence.length; i++)
        {
            let number = await simonView.getUserInput();
            if (parseInt(number) !== simonModel.sequence[i])
            {
                simonView.showMessage(`You were wrong! Your result: ${simonModel.result} points!`);

                simonModel.isOver = true;
                return simonModel.result;
            }
            else console.clear();
        }

        simonModel.result++;
    }

}