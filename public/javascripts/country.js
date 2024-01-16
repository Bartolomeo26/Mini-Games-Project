const startButton = document.querySelector('.start-button');
const countryForm = document.querySelector('.country-form');
const gameInfo = document.querySelector('.game-info');
const gamePanel = document.querySelector('.game-panel');
const gameWon = document.querySelector('.game-won');
const gameLost = document.querySelector('.game-lost');
const resultInfo = document.querySelector('.result-info');
const countryInfo = document.querySelectorAll('.country-info');
const resultInput = document.querySelector('#resultInput');
const tryAgain = document.querySelectorAll('.try-again');
const buttonSurrender = document.querySelector('.button-surrender');
const alert = document.querySelector('.alert');
const countryInput = document.querySelector('#country');
const countryTips = document.querySelector('.country-tips');

let counter = 1;
let randomNumber;
let randomCountry, guessedCountry;
let endpoint, startpoint;

startButton.addEventListener('click', async () =>
{
    if (alert)
        alert.classList.add('d-none');

    gameInfo.classList.toggle('d-none');
    gamePanel.classList.toggle('d-none');
    countryInput.focus();
    randomNumber = Math.floor(Math.random() * countries.length);
    randomCountry = countries[randomNumber];
    endpoint = { lat: randomCountry.latitude, lng: randomCountry.longitude };

})

for (let i = 0; i <= 1; i++)
{
    tryAgain[i].addEventListener('click', async () =>
    {
        counter = 1;
        gameInfo.classList.toggle('d-none');
        if (i == 0) gameWon.classList.toggle('d-none');
        else gameLost.classList.toggle(`d-none`);
        countryTips.innerHTML = '';

        countryInput.disabled = false;
    })
}

buttonSurrender.addEventListener('click', async () =>
{
    countryInput.disabled = true;
    countryInfo[1].innerHTML = `The country you were looking for was <strong class="text-info">${randomCountry.name}</strong>`;
    gameLost.classList.toggle(`d-none`);
    gamePanel.classList.toggle('d-none');
})

countryForm.addEventListener('submit', async (e) =>
{
    e.preventDefault();

    guessedCountry = countryInput.value;
    guessedCountry = countries.find((country) =>
    {
        return country.name === guessedCountry;
    })
    if (!guessedCountry) { countryInput.classList.add('is-invalid'); return; }
    else { countryInput.classList.remove('is-invalid') }
    startpoint = { lat: guessedCountry.latitude, lng: guessedCountry.longitude };
    displayTips()

    if (guessedCountry.name === randomCountry.name)
    {
        gameWon.classList.toggle('d-none');
        countryInfo[0].innerHTML = `The country was indeed <strong class="text-primary">${randomCountry.name}</strong>`;
        if (resultInput)
            resultInput.value = counter;
        if (counter === 1)
            resultInfo.innerHTML = `Wow, you only needed 1 guess! Congratulations!`
        else
        {
            resultInfo.innerHTML = `You've made it after ${counter} tries! Congratulations!`
        }
        gamePanel.classList.toggle('d-none');
    }
    else
    {
        counter++;
    }
    countryInput.value = '';

})

const displayTips = () =>
{
    let information;

    const p = document.createElement("p");
    p.classList.add('text-light', 'fs-5', 'mt-2');
    p.innerHTML = `${counter}. ${guessedCountry.name}`
    const divTip = document.createElement("div");
    divTip.classList.add('tip', 'd-flex', 'align-items-center', 'justify-content-between', 'w-100');

    const divHemisphere = document.createElement("div");
    const pHemisphere = document.createElement("p");
    const spanHemisphere = document.createElement("span");
    divHemisphere.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center')
    information = isTrue(guessedCountry.hemisphere, randomCountry.hemisphere)
    if (information === 'TRUE') divHemisphere.classList.add('good')
    else divHemisphere.classList.add('wrong')
    spanHemisphere.innerHTML = `${information}`;
    pHemisphere.innerHTML = `${guessedCountry.hemisphere}`;
    divHemisphere.append(pHemisphere);
    divHemisphere.append(spanHemisphere);
    divTip.append(divHemisphere);

    const divContinent = document.createElement("div");
    const pContinent = document.createElement("p");
    const spanContinent = document.createElement("span");
    divContinent.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center')
    information = isTrue(guessedCountry.continent, randomCountry.continent)
    if (information === 'TRUE') divContinent.classList.add('good')
    else divContinent.classList.add('wrong')
    spanContinent.innerHTML = `${information}`;
    pContinent.innerHTML = `${guessedCountry.continent}`;
    divContinent.append(pContinent);
    divContinent.append(spanContinent);
    divTip.append(divContinent);

    const divTemperature = document.createElement("div");
    const pTemperature = document.createElement("p");
    const spanTemperature = document.createElement("span");
    divTemperature.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center')
    information = lowerHigher(guessedCountry.averageTemperature, randomCountry.averageTemperature)
    if (information === 'PERFECT') divTemperature.classList.add('good')
    else if (information === 'HIGHER' || information === 'LOWER')
        divTemperature.classList.add('wrong')
    else
        divTemperature.classList.add('close')
    spanTemperature.innerHTML = `${information}`;
    pTemperature.innerHTML = `${guessedCountry.averageTemperature}°C`;
    divTemperature.append(pTemperature);
    divTemperature.append(spanTemperature);
    divTip.append(divTemperature);

    const divPopulation = document.createElement("div");
    const pPopulation = document.createElement("p");
    const spanPopulation = document.createElement("span");
    divPopulation.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center')
    information = lowerHigher(guessedCountry.population, randomCountry.population)
    if (information === 'PERFECT') divPopulation.classList.add('good')
    else if (information === 'HIGHER' || information === 'LOWER')
        divPopulation.classList.add('wrong')
    else
        divPopulation.classList.add('close')
    spanPopulation.innerHTML = `${information}`;
    pPopulation.innerHTML = `${guessedCountry.population}M`;
    divPopulation.append(pPopulation);
    divPopulation.append(spanPopulation);
    divTip.append(divPopulation);

    const divDirection = document.createElement("div");
    const pDirection = document.createElement("p");
    pDirection.innerHTML = `${directionCalculation(endpoint, startpoint)}`;
    divDirection.classList.add('direction');
    divDirection.append(pDirection);
    divTip.append(divDirection);

    countryTips.append(p)
    countryTips.append(divTip);


}

const directionCalculation = (endpoint, startpoint) =>
{

    let x1 = endpoint.lat;
    let y1 = endpoint.lng;
    let x2 = startpoint.lat;
    let y2 = startpoint.lng;

    var radians = Math.atan2((y1 - y2), (x1 - x2));
    var compassReading = radians * (180 / Math.PI);

    var coordNames = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    var coordIndex = Math.round(compassReading / 45);
    if((compassReading / 45) === 0) return "PERFECT"
    if (coordIndex < 0)
    {
        coordIndex = coordIndex + 8
    };

    return coordNames[coordIndex];
}

const isTrue = (a, b) =>
{
    if (a === b)
        return 'TRUE'
    else return 'FALSE'

}
const lowerHigher = (a, b) =>
{
    const difference = Math.abs(a - b);
    if (difference <= 1 && b > a)
        return 'HIGHER(CLOSE)'
    else if (difference <= 1 && b < a)
        return 'LOWER(CLOSE)'
    else if (b > a)
        return 'HIGHER'
    else if (b < a) return 'LOWER'
    else return 'PERFECT'
}
