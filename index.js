const Sport = require("./sport");
const User = require("./user");
const SportEvent = require("./sportEvent");
const Venue = require("./venue");

let running = new Sport("individual", 1);
let hanball = new Sport("team", 6);
let alina = new User("alina", "nasti", "alina.ghe@gmail.com");
alina.addInterest(running);
let aurel = new User("aurel", "nasti", "aurel.ghe@gmail.com");
aurel.addInterest(running);
let venue = new Venue("AlexanderPlatz", "Alex 24", [hanball, running]);
let todayEven = new SportEvent(new Date(), venue, 6, running);
todayEven.addParticipants(alina);
todayEven.addParticipants(aurel);
todayEven.printParticipantsNames();
