const startButton = document.querySelector('.start-button');
const newButton = document.querySelector('.new-button');
const seenButton = document.querySelector('.seen-button');
const gameInfo = document.querySelector('.game-info');
const gamePanel = document.querySelector('.game-panel');
const gameLost = document.querySelector('.game-lost');
const word = document.querySelector('.word');
const resultInfo = document.querySelector('.result-info');
const resultInput = document.querySelector('#resultInput');
const tryAgain = document.querySelector('.try-again');
const alert = document.querySelector('.alert');
const livesLeft = document.querySelector('.lives');
const level = document.querySelector('.level');
let random = null;
let counter = 0;
let correctAnswer, randomWord, randomWordNumber;
let seenWords = [];
let lives = 3;

tryAgain.addEventListener('click', async () =>
{
    seenWords = [];
    counter = 0;
    lives = 3;
    gameInfo.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
})

startButton.addEventListener('click', async () =>
{
    if (alert)
        alert.classList.add('d-none');

    gameInfo.classList.toggle('d-none');
    gamePanel.classList.toggle('d-none');

    displayNewWord();
    updateLivesAndScore();
})
newButton.addEventListener('click', async () =>
{

    if (correctAnswer === 'new')
    {

        counter++;
        displayNewWord();

    }
    else
    {
        lives--;
        if (lives == 0)
        {
            gameIsLost();
        }
        else
        {
            displayNewWord();
        }
    }
    updateLivesAndScore();

})
seenButton.addEventListener('click', async () =>
{

    if (correctAnswer === 'seen')
    {
        counter++;
        displayNewWord();
    }
    else
    {
        lives--;
        if (lives == 0)
        {
            gameIsLost();
        }
        else
        {
            displayNewWord();
        }
    }
    updateLivesAndScore();
})

const displayNewWord = () =>
{
    randomNumber = Math.floor(Math.random() * 9 + 1);
    if (randomNumber % 2 != 0 || counter < 2)
    {
        randomWordNumber = Math.floor(Math.random() * words.length);
        randomWord = words[randomWordNumber].name;
        words.splice(randomWordNumber, 1)

        seenWords.push(randomWord);
        correctAnswer = 'new';
    }
    else
    {
        randomWord = seenWords[Math.floor(Math.random() * seenWords.length)]

        correctAnswer = 'seen';
    }
    word.innerHTML = `${randomWord}`;
}

const updateLivesAndScore = () =>
{
    livesLeft.innerHTML = `Lives: ${lives}`;
    level.innerHTML = `Score: ${counter}`;
}

const gameIsLost = () =>
{
    gamePanel.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
    resultInfo.innerHTML = `Your result: ${counter}`;
    if (resultInput)
        resultInput.value = counter;
}