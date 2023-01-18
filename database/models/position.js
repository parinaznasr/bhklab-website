const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    title: String,
    description: String,
    min_qualifications: String,
    pref_qualifications: String,
    responsibilities: String,
    apply: String,
    active: Boolean,
    date: Date,
});

const Position = mongoose.model('Position', positionSchema);
module.exports = Position;
