const BaseService = require("./base-service");
const SportModel = require("../models/sport");

class SportService extends BaseService {
    constructor() {
        super(SportModel, `${__dirname}/../sport.json`);
    }
}

module.exports = new SportService();
