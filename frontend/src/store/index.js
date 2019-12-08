import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
Vue.use(Vuex);

const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:3000";
const transport = axios.create({
    withCredentials: true
});
export default new Vuex.Store({
    state: {
        counter: 0,
        users: [],
        user: {},
        sports: [],
        sport: {},
        venues: [],
        venue: {},
        userDetails: {},
        sportDetails: {},
        venueDetails: {},
        sportEvents: []
    },
    mutations: {
        SET_COUNTER(state, newCount) {
            state.counter = newCount;
        },
        SET_USERS(state, data) {
            state.users = data;
        },
        SET_USER(state, data) {
            state.user = data;
        },
        SET_SPORTS(state, data) {
            state.sports = data;
        },
        SET_SPORT(state, data) {
            state.sport = data;
        },
        SET_VENUES(state, data) {
            state.venues = data;
        },
        SET_VENUE(state, data) {
            state.venue = data;
        },
        SAVE_NEW_USER(state, data) {
            state.userDetails = data;
        },
        SAVE_NEW_SPORT(state, data) {
            state.sportDetails = data;
        },
        SAVE_NEW_VENUE(state, data) {
            state.venueDetails = data;
        },
        SET_SPORT_EVENTS(state, data) {
            state.sportEvents = data;
        }
    },
    actions: {
        incrementCounter({ commit, state }) {
            const newCount = state.counter + 1;
            commit("SET_COUNTER", newCount);
        },
        async fetchUsers({ commit }) {
            const result = await transport.get(`${apiUrl}/user/all/json`);
            commit("SET_USERS", result.data);
        },
        async fetchUser({ commit }, id) {
            console.log("Fetch user from backed", id);
            const result = await transport.get(`${apiUrl}/user/${id}/json`);
            commit("SET_USER", result.data);
        },
        async fetchSports({ commit }) {
            try {
                const result = await transport.get(`${apiUrl}/sport/all/json`);
                commit("SET_SPORTS", result.data);
            } catch (e) {
                router.push("/");
            }
        },
        async fetchSport({ commit }, id) {
            const result = await transport.get(`${apiUrl}/sport/${id}/json`);
            commit("SET_SPORT", result.data);
        },
        async fetchVenues({ commit }) {
            const result = await transport.get(`${apiUrl}/venue/all/json`);
            commit("SET_VENUES", result.data);
        },
        async fetchVenue({ commit }, id) {
            const result = await transport.get(`${apiUrl}/venue/${id}/json`);
            commit("SET_VENUE", result.data);
        },
        async createUser({ commit }, userDetails) {
            this.state.userDetails = userDetails;
            const result = await transport.post(`${apiUrl}/user`, this.state.userDetails);
            commit("SAVE_NEW_USER", result.data);
        },
        async createSport({ commit }, sportDetails) {
            this.state.sportDetails = sportDetails;
            const result = await transport.post(`${apiUrl}/sport`, this.state.sportDetails);
            commit("SAVE_NEW_SPORT", result.data);
        },
        async createVenue({ commit }, venueDetails) {
            this.state.venueDetails = venueDetails;
            const result = await transport.post(`${apiUrl}/venue`, this.state.venueDetails);
            commit("SAVE_NEW_VENUE", result.data);
        },
        async fetchSportEvents({ commit }) {
            const result = await transport.get(`${apiUrl}/event/all/json`);
            commit("SET_SPORT_EVENTS", result.data);
        }
    },
    modules: {}
});
