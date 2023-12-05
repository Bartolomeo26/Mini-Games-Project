const prompt = require('prompt');
var center = require('center-align');
var colors = require('colors');
prompt.start();

const userView = {
    showMessage: function (message)
    {
        console.log(center(message, 149).brightCyan);
    },

    getUsernameInput: async function ()
    {
        let { username } = await prompt.get('username');
        return username;
    },
    getPasswordInput: async function ()
    {
        let { password } = await prompt.get('password');
        return password;
    }
};

module.exports = userView;