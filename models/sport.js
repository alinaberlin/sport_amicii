module.exports = class Sport {
    constructor(type, minAttendee, id) {
        this.type = type;
        this.minAttendee = minAttendee;
        this.id = id;
    }

    static create({ type, minAttendee, id }) {
        return new Sport(type, minAttendee, id);
    }
};
