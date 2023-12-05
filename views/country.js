const prompt = require('prompt');
var center = require('center-align');
var colors = require('colors');
prompt.start();

const countryView = {
    showMessage: function (message)
    {
        console.log(center(message, 149).brightCyan);
    },

    getUserInput: async function ()
    {
        let { guessedCountry } = await prompt.get('guessedCountry');
        return guessedCountry;
    }
};

module.exports = countryView;
