module.exports =class Sport {
    constructor(type, minAttendee) {
        this.type = type;
        this.minAttendee = minAttendee;
    }

    static create({type, minAttendee}) {
        return new Sport(type, minAttendee)
    }
}
