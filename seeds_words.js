const fs = require('fs');
const Word = require('./models/word');
const mongoose = require('mongoose');
main()
    .then(() => console.log("Mongo connection working"))
    .catch(err => console.log(err));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project2');
}
const filePath = 'words.csv';


// Step 1: Read the contents of the CSV file
fs.readFile(filePath, 'utf8', async (err, data) =>
{
    if (err)
    {
        console.error('Error reading the file:', err);
        return;
    }

    // Step 2-5: Process the data and create objects
    let lines = data.split('\n');

    for (let i = 0; i < lines.length; i++)
    {
        let wordObject = {
            name: lines[i]
        };
        const word = new Word(wordObject);
        await word.save().then(data => console.log(data));

    }
})
