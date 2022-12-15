const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    title: String,
    date: String,
    url: String,
    memberId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member'}],
});

const Conference = mongoose.model('Conference', conferenceSchema);
module.exports = Conference;


