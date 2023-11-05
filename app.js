const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const Joi = require('joi');
const app = express();
main()
    .then(() => console.log("Mongo connection working"))
    .catch(err => console.log(err));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project');
}
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.listen('8000', () =>
{
    console.log("IM WORKING!")
})

app.use((req, res) =>
{
    res.send(vehicleBearing(endpoint, startpoint));
})

let endpoint = { lat: 49.75, lng: 15.5 };

let startpoint = { lat: 52.0, lng: 20 };
//bus location from the southeast - the circle center

function vehicleBearing(endpoint, startpoint)
{

    let x1 = endpoint.lat;
    let y1 = endpoint.lng;
    let x2 = startpoint.lat;
    let y2 = startpoint.lng;


    var radians = getAtan2((y1 - y2), (x1 - x2));

    function getAtan2(y, x)
    {
        return Math.atan2(y, x);
    };

    var compassReading = radians * (180 / Math.PI);

    var coordNames = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    var coordIndex = Math.round(compassReading / 45);
    if (coordIndex < 0)
    {
        coordIndex = coordIndex + 8
    };

    return coordNames[coordIndex]; // returns the coordinate value
}
console.log(vehicleBearing(endpoint, startpoint));