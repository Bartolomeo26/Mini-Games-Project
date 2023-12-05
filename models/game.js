const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    scoreboard: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        score: String
    }]

})

module.exports = mongoose.model('Game', gameSchema);