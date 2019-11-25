const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const sportRouter = require("./routes/sport");
const venueRouter = require("./routes/venue");
const eventRouter = require("./routes/sport-event");

const app = express();
app.use(bodyParser.json());
app.set("view engine", "pug");
app.use("/user", userRouter);
app.use("/sport", sportRouter);
app.use("/venue", venueRouter);
app.use("/event", eventRouter);

app.get("/", (req, res) => {
    res.render("index");
});
require("./db/mongo-connection");

module.exports = app;
