const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    text: String,
    date: String,
    image: String
});

const Social = mongoose.model('Social', socialSchema);
module.exports = Social;
