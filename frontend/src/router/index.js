import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Sports from "../views/Sports.vue";
import Sport from "../views/Sport.vue";
import Venues from "../views/Venues.vue";
import Venue from "../views/Venue.vue";
import Registration from "../views/Registration.vue";
import NewSport from "../views/NewSport.vue";
import NewVenue from "../views/NewVenue.vue";
import SportEvents from "../views/SportEvents.vue";
import SportEvent from "../views/SportEvent.vue";
import NewSportEvent from "../views/NewSportEvent.vue";
import Login from "../views/Login.vue";
import MyEvents from "../views/MyEvents.vue";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/user/:id",
        name: "user",
        component: User
    },
    {
        path: "/sport/",
        name: "sport",
        component: Sports
    },
    {
        path: "/sport/:id",
        name: "sport",
        component: Sport
    },
    {
        path: "/venue",
        name: "venues",
        component: Venues
    },
    {
        path: "/venue/:id",
        name: "venue",
        component: Venue
    },
    {
        path: "/registration",
        name: "registration",
        component: Registration
    },
    {
        path: "/add/sport",
        name: "add-sport",
        component: NewSport
    },
    {
        path: "/add/venue",
        name: "add-venue",
        component: NewVenue
    },
    {
        path: "/event",
        name: "sport-events",
        component: SportEvents
    },
    {
        path: "/event/:id",
        name: "sport-event",
        component: SportEvent
    },
    {
        path: "/add/event",
        name: "new-sport-event",
        component: NewSportEvent
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/myevents",
        name: "MyEvents",
        component: MyEvents
    },
    {
        path: "/event/:eventId/user/:userId/join",
        name: "JoinEvent",
        component: SportEvent
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
