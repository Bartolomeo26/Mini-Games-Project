const Country = require('../models/country');
const countryView = require('../views/country');
const { isTrue, lowerHigher } = require('../utils/countryComparisonFunctions');
const directionCalculation = require('../utils/directionCalculation');

module.exports.countryGame = async () =>
{

    let randomCountry = await Country.aggregate([{ $sample: { size: 1 } }]);
    let endpoint = { lat: randomCountry[0].latitude, lng: randomCountry[0].longitude };
    let counter = 1;

    while (true)
    {
        let guessedCountry = await countryView.getUserInput();
        if (guessedCountry === 'e') break;
        guessedCountry = await Country.findOne({ name: guessedCountry });

        if (!guessedCountry)
        {
            countryView.showMessage("There is no such a country!");
            continue;
        }
        let startpoint = { lat: guessedCountry.latitude, lng: guessedCountry.longitude };

        if (randomCountry[0].name === guessedCountry.name)
        {
            countryView.showMessage(`CONGRATULATIONS. The country was indeed ${randomCountry[0].name}. You guessed it after ${counter} times!`);
            return counter;
        }
        else
        {
            countryView.showMessage(`Hemisphere: ${guessedCountry.hemisphere} - ${isTrue(guessedCountry.hemisphere, randomCountry[0].hemisphere)}, Continent: ${guessedCountry.continent} - ${isTrue(guessedCountry.continent, randomCountry[0].continent)}, Temperature: ${guessedCountry.averageTemperature}°C - ${lowerHigher(guessedCountry.averageTemperature, randomCountry[0].averageTemperature)}, Population: ${guessedCountry.population}M - ${lowerHigher(guessedCountry.population, randomCountry[0].population)}, Direction: ${directionCalculation(endpoint, startpoint)}`);
        }
        counter++;
    }

};