const mongoose = require("mongoose");

const SportSchema = new mongoose.Schema({
    type: String,
    minAttendee: Number
});
const SportModel = mongoose.model("Sport", SportSchema);

module.exports = SportModel;
