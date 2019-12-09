const mongoose = require("mongoose");

const SportSchema = new mongoose.Schema({
    name: String,
    minAttendee: Number,
    maxAttendee: Number,
    img: String
});
const SportModel = mongoose.model("Sport", SportSchema);

module.exports = SportModel;
