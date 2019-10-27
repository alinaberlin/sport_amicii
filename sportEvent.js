module.exports= class SportEvent {
    constructor(date, venue, maxNumber, sport) {
        this.date = date;
        this.venue = venue;
        this.maxNumber = maxNumber;
        this.sport = sport;
        this.waitingList = [];
        this.participants = [];
    }
    printParticipantsNames() {
        this.participants.forEach(p => p.printName());
    }
    addParticipants(participant) {
        if (!participant.sports.includes(this.sport)) {
            console.log("Sport of this event is not in your interes ");
            return;
        }
        if (this.participants.length < this.maxNumber) {
            this.participants.push(participant);
            console.log(`Welcome ` + participant.firstName);
            return;
        }
        this.waitingList.push(participant);
        console.log("There are not empty spots, you're been added to waiting list");
    }
}