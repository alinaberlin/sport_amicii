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
}

module.exports = new SportEventService();
