const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const sportRouter = require("./routes/sport");
const venueRouter = require("./routes/venue");
const eventRouter = require("./routes/sport-event");

const app = require("./app");

app.listen(3000, () => {
    console.log("server listening");
});
