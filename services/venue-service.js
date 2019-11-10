const BaseService = require('./base-service')
const VenueModel = require('../models/user')

class  VenueService extends BaseService {
    constructor() {
        super(VenueModel, `${__dirname}/../venue.json`)
    }
}

module.exports = new VenueService()
