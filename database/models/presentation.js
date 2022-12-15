const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentationSchema = new Schema({
    title: String,
    event: String,
    date: Date,
    rawDate: String,
    url: String,
    format: String,
    type: String,
    image: String,
    members : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
});

const Presentation = mongoose.model('Presentation', presentationSchema);
module.exports = Presentation;
