const Sport = require("./sport");
const User = require("./user");
const SportEvent = require("./sportEvent");
const Venue = require("./venue");
const Database = require("./database");

let running = new Sport("individual", 1);
let hanball = new Sport("team", 6);
let alina = new User(1, "alina", "nasti", "alina.ghe@gmail.com");
let aurel = new User(2, "aurel", "nasti", "aurel.ghe@gmail.com");

let alinaFromObj = User.create(alina);
let aurelFromObj = User.create(aurel);

alina.addInterest(running);
aurel.addInterest(running);
let venue = new Venue("AlexanderPlatz", "Alex 24", [hanball, running]);
let todayEven = new SportEvent(new Date(), venue, 6, running);
todayEven.addParticipants(alina);
todayEven.addParticipants(aurel);
todayEven.cancelParticipation(aurelFromObj);
todayEven.printParticipantsNames();

Database.save("todayevent.json", todayEven);
Database.save("user.json", alinaFromObj);
const loaderFile = Database.load("todayevent.json");
console.log(loaderFile);
