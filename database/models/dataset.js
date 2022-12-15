const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datasetSchema = new Schema({
    accession: [{
        link: String,
        name: String
    }],
    title: String,
    samples: Number,
    release: String,
});

const Dataset = mongoose.model('Dataset', datasetSchema);
module.exports = Dataset;


