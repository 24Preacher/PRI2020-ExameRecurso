const mongoose = require('mongoose')

var membersSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    name: String,
    course: String,
    scores: [Number]
})


var teamsSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    guid: String,
    team: String,
    pitch1: Boolean,
    pitch2: Boolean,
    techPitch: Boolean,
    businessReport: Boolean,
    techReport: Boolean,
    members: [membersSchema]
  });

module.exports = mongoose.model('teams', teamsSchema)