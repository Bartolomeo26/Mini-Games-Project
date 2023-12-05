const fs = require('fs');
const Country = require('./models/country');
const mongoose = require('mongoose');
main()
    .then(() => console.log("Mongo connection working"))
    .catch(err => console.log(err));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project');
}

// Replace 'your_file.csv' with the path to your actual CSV file
const filePath = 'countries.csv';


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
    console.log(lines.length);

    for (let i = 0; i < 195; i++)
    {
        let values = lines[i].split(', ');

        let countryObject = {
            name: values[0],
            hemisphere: values[1],
            continent: values[2],
            population: parseFloat(values[3]),
            averageTemperature: parseFloat(values[4]),
            latitude: parseFloat(values[5]),
            longitude: parseFloat(values[6]),
        };
        const country = new Country(countryObject);
        await country.save().then(data => console.log(data));

    }
})
