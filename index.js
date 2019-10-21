class User {
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
    printName(){
        console.log('Name:', this.firstName, this.secondName)
    }
    addInterest(sport) {
        this.sports.push(sport);
    }
}

class Sport {
    constructor(type, minAttendee) {
        this.type = type;
        this.minAttendee = minAttendee;
    }
}

class SportEvent {
    constructor(date, venue, maxNumber, sport) {
        this.date = date;
        this.venue = venue;
        this.maxNumber = maxNumber;
        this.sport = sport;
        this.waitingList = [];
        this.participants = [];
    }
    printParticipantsNames() {
        this.participants.forEach(p => p.printName())
      }
    addParticipants(participant) {
        if (!participant.sports.includes(this.sport)) {
            return "Sport of this event is not in your interes ";
        }
        if (this.participants.length < this.maxNumber) {
            this.participants.push(participant);
            return `Welcome ` + participant.firstName;
        } else {
            this.waitingList.push(participant);
        }
    }
}
class Venue {
    constructor(name, address, sports) {
        this.name = name;
        this.address = address;
        this.sports = sports;
    }
}

let running = new Sport("individual", 1);
let hanball = new Sport("team", 6);
let alina = new User("alina", "nasti", "alina.ghe@gmail.com");
alina.addInterest(running)
let aurel = new User("aurel", "nasti", "aurel.ghe@gmail.com");
aurel.addInterest(running)
let venue = new Venue("AlexanderPlatz", "Alex 24", "hanball");
let todayEven = new SportEvent(new Date(), venue, 6, running);
console.log(todayEven.addParticipants(alina));
console.log(todayEven.addParticipants(aurel));
todayEven.printParticipantsNames()