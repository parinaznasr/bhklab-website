const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexSchema = new Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
    indexProjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

const Index = mongoose.model('Index', indexSchema);
module.exports = Index;
