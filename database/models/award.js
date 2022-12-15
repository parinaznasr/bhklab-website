const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awardSchema = new Schema({
    title: String,
    date: String,
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'}
});

const Award = mongoose.model('Award', awardSchema);
module.exports = Award;
