const BaseService = require("./base-service");
const SportModel = require("../models/sport");

class SportService extends BaseService {
    model = SportModel;
}

module.exports = new SportService();
