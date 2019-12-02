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

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
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
        path: "/venue/",
        name: "venue",
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
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
