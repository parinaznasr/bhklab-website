const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberprojectSchema = new Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    status: String
});

const Memberproject = mongoose.model('Memberproject', memberprojectSchema);
module.exports = Memberproject;
