const Word = require('../models/word');
const wordView = require('../views/word');

module.exports.wordGame = async () =>
{
    let seenWords = [];
    let counter = 0;
    while (true)
    {

        let randomWord;
        let correctAnswer;
        let randomNumber = Math.floor(Math.random() * 9 + 1);
        if (randomNumber >= 4 || counter == 0)
        {
            randomWord = await Word.aggregate([{ $sample: { size: 1 } }]);
            randomWord = randomWord[0];
            seenWords.push(randomWord);
            correctAnswer = 'new';
        }
        else
        {
            randomWord = seenWords[Math.floor(Math.random() * seenWords.length)]

            correctAnswer = 'seen';
        }
        wordView.showMessage(randomWord.name);
        wordView.showMessage("Type down SEEN if you've seen that word or NEW if the word is new!");
        let answer = await wordView.getUserInput();
        if (answer.toLowerCase() === correctAnswer)
        {

            counter++;
            console.clear();
        }
        else
        {
            wordView.showMessage(`You were wrong. Your result: ${counter} points!`);
            return counter;
        }
    }
};