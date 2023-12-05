const prompt = require('prompt');
var center = require('center-align');
var colors = require('colors');
prompt.start();

const numberSequenceView = {
    showMessage: function (message)
    {
        console.log(center(message, 149).brightCyan);
    },

    getUserInput: async function ()
    {
        let { guessedNumber } = await prompt.get('guessedNumber');
        return guessedNumber;
    }
};

module.exports = numberSequenceView;
