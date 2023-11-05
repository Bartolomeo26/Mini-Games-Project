const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
hemisphere:{
    type: String,
    required: true,
    in: ['Northern', 'Southern']
},
continent:{
type: String,
required: true,
in: ['Europe', 'South America', 'North America', 'Africa', 'Asia', 'Australia/Oceania', ]
},
averageTemperature:{
    type: Number,
    required: true,
},
population:{
type: Number,
required: true,
min: 0
},
latitude:{

},
longitude:{

}

})

module.exports = mongoose.model('Country', countrySchema);