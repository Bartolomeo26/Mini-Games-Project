const prompt = require('prompt');
var center = require('center-align');
var colors = require('colors');
prompt.start();

const wordView = {
    showMessage: function (message)
    {
        console.log(center(message, 149));
    },

    getUserInput: async function ()
    {
        let { guessedWord } = await prompt.get('guessedWord');
        return guessedWord;
    }
};

module.exports = wordView;
