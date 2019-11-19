const BaseService = require("./base-service");
const SportEventModel = require("../models/sport");

class SportEventService extends BaseService {
    model = SportEventModel;

    async addParticipant(user, event) {
        event.participants.push(user);
        return await event.save();
    }
}

module.exports = new SportEventService();
