const startButton = document.querySelector('.start-button');
const numberForm = document.querySelector('.number-form');
const gameInfo = document.querySelector('.game-info');
const gamePanel = document.querySelector('.game-panel');
const gameLost = document.querySelector('.game-lost');
const numberShow = document.querySelector('.number-show');
const number = document.querySelector('.number');
const resultInfo = document.querySelector('.result-info');
const resultInput = document.querySelector('#resultInput');
const tryAgain = document.querySelector('.try-again');
const timeLeft = document.querySelector('.time-left');
const alert = document.querySelector('.alert');
const numberType = document.querySelector('.number-type');


tryAgain.addEventListener('click', async () =>
{
    model.sequenceLength = 1;
    model.time = 1000;
    gameInfo.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
})

startButton.addEventListener('click', async () =>
{
    if (alert)
        alert.classList.add('d-none');
    gameInfo.classList.toggle('d-none');

    numberShow.classList.toggle('d-none');
    model.randomNumber = generateRandomSequence();
    number.innerHTML = model.randomNumber;
    timeLeft.innerHTML = "You've got 1 second!";
    hideNumber(model.time);


})
numberForm.addEventListener('submit', async (e) =>
{
    e.preventDefault();
    if (number.innerHTML === numberType.value)
    {
        numberType.value = '';
        gamePanel.classList.toggle('d-none');
        model.sequenceLength++;
        model.time += 1000;
        numberShow.classList.toggle('d-none');
        model.randomNumber = generateRandomSequence();
        number.innerHTML = model.randomNumber;
        timeLeft.innerHTML = `You've got ${model.time / 1000} seconds!`;
        hideNumber(model.time);
    }
    else
    {
        numberType.value = '';
        gamePanel.classList.toggle('d-none');
        gameLost.classList.toggle('d-none');
        resultInfo.innerHTML = `Your result: ${model.sequenceLength - 1}`;
        if (resultInput)
            resultInput.value = parseInt(model.sequenceLength - 1);
    }


})

const generateRandomSequence = function ()
{
    const min = Math.pow(10, model.sequenceLength - 1);
    const max = Math.pow(10, model.sequenceLength) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const hideNumber = function (time)
{
    setTimeout(() =>
    {
        numberShow.classList.toggle('d-none');
        gamePanel.classList.toggle('d-none');
        numberType.focus();
    }, model.time);
}