const mongoose = require("mongoose");

const SportEventSchema = new mongoose.Schema({
    date: Date,
    maxNumber: Number,
    venue: { type: mongoose.SchemaTypes.ObjectId, ref: "Venue" },
    sport: { type: mongoose.SchemaTypes.ObjectId, ref: "Sport" },
    participants: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            autopopulate: {
                maxDepth: 1
            }
        }
    ],
    waitingList: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            autopopulate: {
                maxDepth: 1
            }
        }
    ]
});
const SportEventModel = mongoose.model("SportEvent", SportEventSchema);

module.exports = SportEventModel;
