module.exports=class Venue {
    constructor(name, address, sports) {
        if (!Array.isArray(sports)){
            throw 'Sports should be an array'//for solid code 
        }
        this.name = name;
        this.address = address;
        this.sports = sports;
    }
    addSport(sport){
        this.sports.push(sport)
    }
    static create({name, address, sports}){
    return new Venue(name, address, sports)
    }
}
