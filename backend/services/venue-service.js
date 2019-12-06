const BaseService = require("./base-service");
const VenueModel = require("../models/venue");

class VenueService extends BaseService {
    model = VenueModel;
}

module.exports = new VenueService();
