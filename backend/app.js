const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/user");
const sportRouter = require("./routes/sport");
const venueRouter = require("./routes/venue");
const eventRouter = require("./routes/sport-event");
const cookieSession = require("cookie-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const loginRouter = require("./routes/login");

const app = express();
app.use(
    cors({
        origin: process.env.VUE_APP_URL || "http://localhost:8080",
        credentials: true,
        allowedHeaders: ["Content-Type", "Set-Cookie"],
        exposedHeaders: ["Content-Type", "Set-Cookie"]
    })
);
app.use(bodyParser.json());
app.use(
    cookieSession({
        name: "sportamiciisession",
        keys: ["sportamiciisession"],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "pug");
app.use("/user", userRouter);
app.use("/sport", sportRouter);
app.use("/venue", venueRouter);
app.use("/event", eventRouter);
app.use("/api", loginRouter);

app.get("/", (req, res) => {
    res.render("index");
});
require("./db/mongo-connection");

module.exports = app;
