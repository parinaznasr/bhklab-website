const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchSchema = new Schema({
    title: String,
    description: String,
    teams: [
        {
            teamTitle: String,
            url: String,
            teamDesc: String,
            teamImage: String
        }
    ],
    image: String
});

const Research = mongoose.model('Research', researchSchema);
module.exports = Research;
