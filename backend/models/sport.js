const mongoose = require("mongoose");

const SportSchema = new mongoose.Schema({
    name: String,
    minAttendee: Number
});
const SportModel = mongoose.model("Sport", SportSchema);

module.exports = SportModel;
