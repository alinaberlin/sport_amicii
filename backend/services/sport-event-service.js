const BaseService = require("./base-service");
const SportEventModel = require("../models/sportEvent");

class SportEventService extends BaseService {
    model = SportEventModel;

    async addParticipant(user, event) {
        if (event.participants.length<event.maxNumber) {
            event.participants.push(user);
        } else {
            event.participants = [user];
        }
        return await event.save();
    }

    async find(itemId) {
        return this.model.findById(itemId).populate("sport").populate("venue").populate("participants");
    }

    async findAll() {
        return this.model.find().populate("sport").populate("venue");
    }
}

module.exports = new SportEventService();
