const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    indexProject: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
    title: String,
    researchArea: String,
    status: String,
    description: String,
    grant: { type: mongoose.Schema.Types.ObjectId, ref: 'Grant'},
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;


