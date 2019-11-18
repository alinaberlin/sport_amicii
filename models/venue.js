const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema({
    name: String,
    address: String,
    sports: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Sport",
            autopopulate: {
                maxDepth: 1
            }
        }
    ]
});
const VenueModel = mongoose.model("Venue", VenueSchema);

module.exports = VenueModel;
