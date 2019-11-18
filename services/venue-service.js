const BaseService = require("./base-service");
const VenueModel = require("../models/user");

class VenueService extends BaseService {
    model = VenueModel;
}

module.exports = new VenueService();
