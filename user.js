module.exports = class User {
    constructor(firstName, secondName, email, password, picture, gender, location) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.password = password;
        this.picture = picture;
        this.gender = gender;
        this.location = location;
        this.sports = [];
    }
    printName() {
        console.log("Name:", this.firstName, this.secondName);
    }
    addInterest(sport) {
        this.sports.push(sport);
    }
}
