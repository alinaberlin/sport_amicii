import test from "ava";
import request from "supertest";
import app from "../app";
import UserService from "../services/user-service";
import VenueService from "../services/venue-service";
import SportService from "../services/sport-service";
import SportEventService from "../services/sport-event-service";

test("Create new sport event", async t => {
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const res = await request(app)
        .post("/event")
        .send(sportEvent);
    t.is(res.status, 200);
});

test("Add user to sport event", async t => {
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    const user = await UserService.add({
        firstName: "Alina",
        secondName: "Ghetler",
        email: "alina.ghetler@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const event = await SportEventService.add(sportEvent);
    const res = await request(app)
        .post(`/event/participate/${event._id}/${user._id}`)
        .send(sportEvent);
    t.is(res.status, 200);
    t.deepEqual(res.body.maxNumber, sportEvent.maxNumber);
});
test("Delete a sport event", async t => {
    t.plan(2);
    // first create a sport event
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const createdSportEvent = (
        await request(app)
            .post("/event")
            .send(sportEvent)
    ).body;
    // delete the sport event
    const deleteRes = await request(app).delete(`/event/${createdSportEvent._id}`);
    // checking for server response status success
    t.is(deleteRes.status, 200);
    t.is(deleteRes.ok, true);
});

test("Create sport event", async t => {
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const res = await request(app)
        .post("/event")
        .send(sportEvent);
    t.is(res.status, 200);
});

test("Add  new user to sport event", async t => {
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    const user = await UserService.add({
        firstName: "Alina",
        secondName: "Ghetler",
        email: "alina.ghetler@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const event = await SportEventService.add(sportEvent);
    const res = await request(app)
        .post(`/event/participate/${event._id}/${user._id}`)
        .send(sportEvent);
    t.is(res.status, 200);
    t.deepEqual(res.body.maxNumber, sportEvent.maxNumber);
});
test("Add 2 users to sport event", async t => {
    const sport = await SportService.add({
        name: "fotball",
        minAttendee: 6
    });
    const venue = await VenueService.add({
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: [sport]
    });
    //creating the 2 users req for this test
    const user = await UserService.add({
        firstName: "Alina",
        secondName: "Ghetler",
        email: "alina.ghetler@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: [sport]
    });
    const user2 = await UserService.add({
        firstName: "Alinus",
        secondName: "Ghetler",
        email: "alinus.ghetler@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: [sport]
    });
    const sportEvent = {
        date: new Date(),
        maxNumber: 10,
        venue: venue,
        sport: sport
    };
    const event = await SportEventService.add(sportEvent);
    const res = await request(app)
        .post(`/event/participate/${event._id}/${user._id}`)
        .send(sportEvent);
    const res2 = await request(app)
        .post(`/event/participate/${event._id}/${user2._id}`)
        .send(sportEvent);
    t.is(res2.status, 200);
    t.deepEqual(res2.body.maxNumber, sportEvent.maxNumber);
 })
 