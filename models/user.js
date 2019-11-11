module.exports = class User {
    constructor(firstName, secondName, email, password, picture, gender, location, id) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.password = password;
        this.picture = picture;
        this.gender = gender;
        this.location = location;
        this.sports = [];
        this.id = id;
    }
    printName() {
        console.log("Name:", this.firstName, this.secondName);
    }
    addInterest(sport) {
        this.sports.push(sport);
    }
    static create({ firstName, secondName, email, password, picture, gender, location, id }) {
        return new User(firstName, secondName, email, password, picture, gender, location, id);
    }
};
