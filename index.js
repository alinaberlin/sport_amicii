const Sport = require("./sport");
const User = require("./user");
const SportEvent = require("./sportEvent");
const Venue = require("./venue");
const Database = require("./database");

let running = new Sport("individual", 1);
let hanball = new Sport("team", 6);
let alina = new User(1, "alina", "nasti", "alina.ghe@gmail.com");
alina.addInterest(running);
let aurel = new User(2, "aurel", "nasti", "aurel.ghe@gmail.com");
aurel.addInterest(running);
let venue = new Venue("AlexanderPlatz", "Alex 24", [hanball, running]);
let todayEven = new SportEvent(new Date(), venue, 6, running);
todayEven.addParticipants(alina);
todayEven.addParticipants(aurel);
todayEven.cancelParticipation(alina);
todayEven.printParticipantsNames();

Database.save("todayevent.json", todayEven);
Database.save("user.json", alina);
const loaderFile = Database.load("todayevent.json");
console.log(loaderFile);
