const BaseService = require("./base-service");
const SportEventModel = require("../models/sport");

class SportEventService extends BaseService {
    model = SportEventModel;

    async addParticipant(user, event) {
        if (event.participants) {
            event.participants.push(user);
        } else {
            event.participants = [user];
        }
        return await event.save();
    }
}

module.exports = new SportEventService();
