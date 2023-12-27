const mongoose = require('mongoose');
const Game = require('./models/game');
main()
    .then(() => console.log("Mongo connection working"))
    .catch(err => console.log(err));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project2');
}

async function addGame()
{
    await Game.deleteMany({})
    await Game.insertMany([{
        name: 'Simon Says'
    },
    {
        name: 'Country Game'
    },
    {
        name: 'Number Sequence'
    },
    {
        name: 'Word Game'
    },
    ])

}
addGame().then(() =>
{
    console.log("Data inserted")
}).catch((err) =>
{
    console.log(err)
});