const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    title: String,
    authors: String,
    year: String,
    categories: [String],
    doi: String,
    url: String,
    pmid: String,
    publisher: String,
    releaseDate: String,
    rawDate: String,
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member'}],
    image: String,
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;


