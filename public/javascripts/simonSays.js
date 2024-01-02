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
let randomNumber = null;
let counter = 0;
let index = 0;
let sequence = [];
let time = 1000;

tryAgain.addEventListener('click', async () =>
{
    index = 0;
    sequence = [];
    counter = 0;
    gameInfo.classList.toggle('d-none');
    gameLost.classList.toggle('d-none');
})

startButton.addEventListener('click', async () =>
{
    
    level.innerHTML = `Level: ${counter}`;
    if (alert)
        alert.classList.add('d-none');
    gameInfo.classList.toggle('d-none');
    gamePanel.classList.toggle('d-none');

    displaySequence();



})

button1.addEventListener('click', async () =>
{
    if (sequence[index] === 1)
    {

        index++;
        if (index === sequence.length)
        {
            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 2)
    {

        index++;
        if (index === sequence.length)
        {

            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 3)
    {

        index++;
        if (index === sequence.length)
        {

            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 4)
    {

        index++;
        if (index === sequence.length)
        {


            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 5)
    {

        index++;
        if (index === sequence.length)
        {

            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 6)
    {

        index++;
        if (index === sequence.length)
        {


            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 7)
    {

        index++;
        if (index === sequence.length)
        {

            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 8)
    {

        index++;
        if (index === sequence.length)
        {


            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    if (sequence[index] === 9)
    {

        index++;
        if (index === sequence.length)
        {

            index = 0;
            counter++;
            level.innerHTML = `Level: ${counter}`;
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
    resultInfo.innerHTML = `Your result: ${counter}`;
    if (resultInput)
        resultInput.value = counter;
}

const sleepFunction = (time) =>
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

const displaySequence = async () =>
{
    await sleepFunction(1000);
    randomNumber = Math.floor(Math.random() * 9 + 1);
    sequence.push(randomNumber);


    for (let i = 0; i <= counter; i++)
    {
        const buttonNumber = sequence[i];
       console.log(sequence);
       
        buttons[buttonNumber - 1].classList.add('blink-class');

        await sleepFunction(1200);
        buttons[buttonNumber - 1].classList.remove('blink-class');
        await sleepFunction(100);
    }
}