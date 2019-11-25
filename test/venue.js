import test from "ava";
import request from "supertest";
import app from "../app";

test("Create new venue", async t => {
    t.plan(3);
    const venueToCreate = {
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: []
    };

    const res = await request(app)
        .post("/venue")
        .send(venueToCreate);

    // checking for server response status success
    t.is(res.status, 200);

    // comparing the created venue data
    t.is(res.body.name, venueToCreate.name);
    t.is(res.body.address, venueToCreate.address);
});
test("Fetch a venue", async t => {
    t.plan(2);
    const venueToCreate = {
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: []
    };

    // first create a venue
    const venueCreated = (
        await request(app)
            .post("/venue")
            .send(venueToCreate)
    ).body;

    // fetch the person we just created
    const fetchRes = await request(app).get(`/venue/${venueCreated._id}`);
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200);

    // this endpoint is responding with the user detail JSON data
    // compare the fetched user with created user
    const venueFetched = fetchRes.body;
    t.deepEqual(venueFetched, venueCreated);
});

test("Delete a venue", async t => {
    t.plan(2);

    // first create a venue
    const venueCreated = {
        name: "Olimpia Stadion",
        address: "Olympischer Platz 3, 14053 Berlin",
        sports: []
    };
    const olimpiaVenueCreated = (
        await request(app)
            .post("/sport")
            .send(venueCreated)
    ).body;

    // delete a venue
    const deleteRes = await request(app).delete(`/venue/${olimpiaVenueCreated._id}`);
    // checking for server response status success
    t.is(deleteRes.status, 200);
    t.is(deleteRes.ok, true);
});

test("Find all", async t => {
    t.plan(1);
    const venueToCreate = [
        {
            name: "Olimpia Stadion",
            address: "Olympischer Platz 3, 14053 Berlin",
            sports: []
        },
        {
            name: "Mercedes Benz Arena",
            address: "Mercedes-Platz 1, 10243 Berlin",
            sports: []
        }
    ];
    venueToCreate.forEach(
        async venue =>
            await request(app)
                .post("/venue")
                .send(venue)
    );
    const res = await request(app).get("/venue/all");
    // checking for server response status success
    t.is(res.status, 200);
});
