const startButton = document.querySelector('.start-button');
const buttons = document.querySelectorAll('.sequence-button');
const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const button4 = document.querySelector('#button-4');
const button5 = document.querySelector('#button-5');
const button6 = document.querySelector('#button-6');
const button7 = document.querySelector('#button-7');
const button8 = document.querySelector('#button-8');
const button9 = document.querySelector('#button-9');
const gameInfo = document.querySelector('.game-info');
const gamePanel = document.querySelector('.game-panel');
const gameLost = document.querySelector('.game-lost');
const resultInfo = document.querySelector('.result-info');
const resultInput = document.querySelector('#resultInput');
const tryAgain = document.querySelector('.try-again');
const timeLeft = document.querySelector('.time-left');
const level = document.querySelector('.level');
const alert = document.querySelector('.alert');

startButton.addEventListener('click', async () =>
{

    level.innerHTML = `Level: ${model.counter}`;
    if (alert)
        alert.classList.add('d-none');
    gameInfo.classList.toggle('d-none');
    gamePanel.classList.toggle('d-none');

    displaySequence();
})

tryAgain.addEventListener('click', async () =>
{
    model.index = 0;
    model.sequence = [];
    model.counter = 0;
    gameInfo.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
})

button1.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 1)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button2.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 2)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button3.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 3)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button4.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 4)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button5.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 5)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button6.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 6)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();

    }
})
button7.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 7)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();
    }
})
button8.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 8)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();
    }
})
button9.addEventListener('click', async () =>
{
    if (model.sequence[model.index] === 9)
    {

        model.index++;
        if (model.index === model.sequence.length)
        {
            model.index = 0;
            model.counter++;
            level.innerHTML = `Level: ${model.counter}`;
            displaySequence();
        }
    }
    else
    {
        gameIsLost();
    }
})


const gameIsLost = () =>
{
    gamePanel.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
    resultInfo.innerHTML = `Your result: ${model.counter}`;
    if (resultInput)
        resultInput.value = model.counter;
}

const sleepFunction = (time) =>
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

const displaySequence = async () =>
{
    await sleepFunction(1000);
    model.randomNumber = Math.floor(Math.random() * 9 + 1);
    model.sequence.push(model.randomNumber);


    for (let i = 0; i <= model.counter; i++)
    {

        const buttonNumber = model.sequence[i];
        buttons[buttonNumber - 1].classList.add('blink-class');

        await sleepFunction(1000);
        buttons[buttonNumber - 1].classList.remove('blink-class');
        await sleepFunction(100);
    }
}