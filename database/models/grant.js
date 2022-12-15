const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grantSchema = new Schema({
    name: String,
    status: String,
    startDate: Date,
    deadline: Date,
    fundingAmount: Number,
});

const Grant = mongoose.model('Grant', grantSchema);
module.exports = Grant;
