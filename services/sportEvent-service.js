const BaseService = require("./base-service");
const SportEventModel = require("../models/sport");

class SportEventService extends BaseService {
    constructor() {
        super(SportEventModel, `${__dirname}/../sportEvent.json`);
    }
}

module.exports = new SportEventService();
