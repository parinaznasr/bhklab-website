const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posterSchema = new Schema({
    title: String,
    date: String,
    type: String,
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'}
});

const Poster = mongoose.model('Poster', posterSchema);
module.exports = Poster;


