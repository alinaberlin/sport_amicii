import test from "ava";
import request from "supertest";
import app from "../app";

test("Create new sport", async t => {
    t.plan(3);
    const sportToCreate = {
        name: "tennis",
        minAttendee: 2
    };

    const res = await request(app)
        .post("/sport")
        .send(sportToCreate);

    // checking for server response status success
    t.is(res.status, 200);

    // comparing the created sport's data
    t.is(res.body.name, sportToCreate.name);
    t.is(res.body.minAttendee, sportToCreate.minAttendee);
});
test("Fetch a sport", async t => {
    t.plan(2);
    const sportToCreate = {
        name: "fotball",
        minAttendee: 6
    };

    // first create a sport
    const sportCreated = (
        await request(app)
            .post("/sport")
            .send(sportToCreate)
    ).body;

    // fetch the person we just created
    const fetchRes = await request(app).get(`/sport/${sportCreated._id}`);
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200);

    // this endpoint is responding with the user detail JSON data
    // compare the fetched user with created sport
    const sportFetched = fetchRes.body;
    t.deepEqual(sportFetched, sportCreated);
});

test("Delete a sport", async t => {
    t.plan(2);

    // first create a sport
    const sportCreate = {
        name: "running",
        minAttendee: 2
    };
    const runningSportCreate = (
        await request(app)
            .post("/sport")
            .send(sportCreate)
    ).body;

    // delete the sport
    const deleteRes = await request(app).delete(`/sport/${runningSportCreate._id}`);
    // checking for server response status success
    t.is(deleteRes.status, 200);
    t.is(deleteRes.ok, true);
});

test("Find all", async t => {
    t.plan(1);
    const sportToCreate = [
        {
            name: "fotball",
            minAttendee: 6
        },
        {
            name: "swimming",
            minAttendee: 2
        }
    ];
    sportToCreate.forEach(
        async sport =>
            await request(app)
                .post("/sport")
                .send(sport)
    );
    const res = await request(app).get("/sport/all");
    // checking for server response status success
    t.is(res.status, 200);
});
