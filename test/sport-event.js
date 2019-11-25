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
        .send();
    t.is(res.status, 200);
});
