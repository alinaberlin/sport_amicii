const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    password: String,
    gender: String,
    location: String,
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
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
