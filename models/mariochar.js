const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scema and Model
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('marioChar',MarioCharSchema);
module.exports = MarioChar;
