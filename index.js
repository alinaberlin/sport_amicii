const express = require("express");
const bodyParser = require("body-parser");
const { UserService, SportService, VenueService, SportEventService } = require("./services");
const { User, Venue, Sport, SportEvent } = require("./models");

const app = express();
app.use(bodyParser.json());
app.set("view engine", "pug");
app.get("/", (req, res) => {
    res.render("index");
});
//rest for user
app.get("/user/all", async (req, res) => {
    const users = await UserService.findAll();
    //res.send(users)
    res.render("user", { users: users });
});

app.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    console.log("Id is", id);
    const user = await UserService.find(id);
    res.send(user);
});
app.post("/user", async (req, res) => {
    const user = await UserService.add(req.body);
    //console.log(req.body)
    res.send(user);
});
app.delete("/user/:id", async (req, res) => {
    await UserService.del(req.params.id);
    res.send("ok");
});

app.post("/participate/:eventId/:userId", async (req, res) => {
    const user = await UserService.find(req.params.userId);
    const event = await SportEventService.find(req.params.eventId);
    console.log("Event is", event);
    event.addParticipants(user);
    res.send(event);
});
//rest for sport module
app.get('/sports/all', async(req,res)=> {
    const sports = await SportService.findAll()
    res.render('sport', {sports:sports})
})
app.get("/sport/:id", async (req, res) => {
    const id = req.params.id;
    const sport = await UserService.find(id);
    res.send(sport);
});
app.delete("/sport/:id", async (req, res) => {
    await SportService.del(req.params.id);
    res.send("ok");
});


app.get('/venue/all', async(req,res)=> {
    const venues = await VenueService.findAll()
    res.render('sport', {venues:venues})
})
app.get("/venue/:id", async (req, res) => {
    const id = req.params.id;
    const venue = await VenueService.find(id);
    res.send(venue);
});
app.delete("/venue/:id", async (req, res) => {
    await VenueService.del(req.params.id);
    res.send("ok");
});

app.listen(3000, () => {
    console.log("server listening");
});

// const { UserService, SportService, VenueService, SportEventService } = require("./services");
// const { User, Venue, Sport, SportEvent } = require("./models");

// const main = async () => {
//     const sport = await SportService.add(Sport.create({ type: "running", minAttendee: 1 }));
//     const tempUser = User.create({ firstName: "Arnold", secondName: "Swarz", email: "aa@gmail.com", password: "password" });
//     tempUser.addInterest(sport);
//     const user = await UserService.add(tempUser);
//     const venue = await VenueService.add(Venue.create({ name: "prenz", address: "Joseph 1", sports: [sport] }));
//     const tempEvent = SportEvent.create({ date: new Date(), venue: venue, maxNumber: 2, minAttendee: 1, sport });
//     tempEvent.addParticipants(user);
//     const sportEvent = await SportEventService.add(tempEvent);
// };

// main();
