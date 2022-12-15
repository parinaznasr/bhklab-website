const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supervisionSchema = new Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
    supervisorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'}
});

const Supervision= mongoose.model('Supervision', supervisionSchema);
module.exports = Supervision;


