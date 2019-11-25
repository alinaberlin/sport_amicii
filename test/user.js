import test from "ava";
import request from "supertest";
import app from "../app";

test("Create new user", async t => {
    t.plan(7);
    const userforCreate = {
        firstName: "Alina",
        secondName: "Ghetler",
        email: "alina.ghetler@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: []
    };

    const res = await request(app)
        .post("/user")
        .send(userforCreate);

    // checking for server response status success
    t.is(res.status, 200);

    // comparing the created user's data
    t.is(res.body.firstName, userforCreate.firstName);
    t.is(res.body.secondName, userforCreate.secondName);
    t.is(res.body.email, userforCreate.email);
    t.is(res.body.password, userforCreate.password);
    t.is(res.body.gender, userforCreate.gender);
    t.is(res.body.location, userforCreate.location);
});
test("Fetch a user", async t => {
    t.plan(2);
    const userForCreate = {
        firstName: "Aurel",
        secondName: "Mihai",
        email: "aurel.mihai@gmail.com",
        password: "dumy",
        gender: "male",
        location: "Berlin",
        sports: []
    };

    // first create a person
    const aureUserCreated = (
        await request(app)
            .post("/user")
            .send(userForCreate)
    ).body;

    // fetch the person we just created
    const fetchRes = await request(app).get(`/user/${aureUserCreated._id}`);
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200);

    // this endpoint is responding with the user detail JSON data
    // compare the fetched user with created user
    const aurelUserFetched = fetchRes.body;
    t.deepEqual(aurelUserFetched, aureUserCreated);
});

test("Delete a user", async t => {
    t.plan(2);

    // first create a person
    const userCreate = {
        firstName: "Mihri",
        secondName: "Minaz",
        email: "mihri.min@gmail.com",
        password: "dumy",
        gender: "female",
        location: "Berlin",
        sports: []
    };
    const mihriUserCreate = (
        await request(app)
            .post("/user")
            .send(userCreate)
    ).body;

    // delete the person
    const deleteRes = await request(app).delete(`/user/${mihriUserCreate._id}`);
    // checking for server response status success
    t.is(deleteRes.status, 200);
    t.is(deleteRes.ok, true);
});

test("Find all", async t => {
    t.plan(1);
    const usersToCreate = [
        {
            firstName: "Alina",
            secondName: "Ghetler",
            email: "alina.ghetler@gmail.com",
            password: "dumy",
            gender: "female",
            location: "Berlin",
            sports: []
        },
        {
            firstName: "Alinus",
            secondName: "Getler",
            email: "alinus.getler@gmail.com",
            password: "dumy",
            gender: "female",
            location: "Berlin",
            sports: []
        }
    ];
    usersToCreate.forEach(
        async user =>
            await request(app)
                .post("/user")
                .send(user)
    );
    const res = await request(app).get("/user/all");
    // checking for server response status success
    t.is(res.status, 200);
});
