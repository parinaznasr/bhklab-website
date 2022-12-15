const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otheraccomSchema = new Schema({
    title: String,
    date: Date,
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'}
});

const Otheraccom = mongoose.model('Otheraccom', otheraccomSchema);
module.exports = Otheraccom;
