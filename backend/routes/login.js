const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserService = require("../services/user-service");


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(400).send([user, "Cannot log in", info]);
        }

        req.login(user, err => {
            res.send(user);
        });
    })(req, res, next);
});
router.get("/logout", function(req, res) {
    req.logout();

    console.log("logged out");

    return res.send();
});
//second variable we are passing in before the callback to protect  URl
const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send("You are not authenticated");
    } else {
        return next();
    }
};
//the URL to get the currently logged in users’ data. When logged in, Passport.js adds a user object
//to the request using the cookie from the front-end as an identifier
router.get("/user", authMiddleware, async (req, res) => {
    let user = await UserService.find(req.session.passport.user);

    console.log([user, req.session]);

    res.send({ user: user });
});

//After logging in, it will store the user object data in a cookie-session, and retrieve the data on later requests.
passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },

        async (username, password, done) => {
            let user = await UserService.findByEmail(username);

            if (user) {
                done(null, user);
            } else {
                done(null, false, { message: "Incorrect username or password" });
            }
        }
    )
);
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    let user = await UserService.find(id);
    done(null, user);
});
module.exports = router;
