const BaseService = require("./base-service");
const UserModel = require("../models/user");

class UserService extends BaseService {
    model = UserModel;

    async findByEmail(email) {
        return this.model.findOne({email:email});
    }
}

module.exports = new UserService();
