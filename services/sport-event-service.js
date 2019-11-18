const BaseService = require("./base-service");
const SportEventModel = require("../models/sport");

class SportEventService extends BaseService {
    model = SportEventModel;
}

module.exports = new SportEventService();
