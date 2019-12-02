import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

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
        sportDetails: {}
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
        }
    },
    actions: {
        incrementCounter({ commit, state }) {
            const newCount = state.counter + 1;
            commit("SET_COUNTER", newCount);
        },
        async fetchUsers({ commit }) {
            const result = await axios.get("http://localhost:3000/user/all/json");
            commit("SET_USERS", result.data);
        },
        async fetchUser({ commit }, id) {
            console.log("Fetch user from backed", id);
            const result = await axios.get(`http://localhost:3000/user/${id}/json`);
            commit("SET_USER", result.data);
        },
        async fetchSports({ commit }) {
            const result = await axios.get("http://localhost:3000/sport/all/json");
            commit("SET_SPORTS", result.data);
        },
        async fetchSport({ commit }, id) {
            const result = await axios.get(`http://localhost:3000/sport/${id}/json`);
            commit("SET_SPORT", result.data);
        },
        async fetchVenues({ commit }) {
            const result = await axios.get(`http://localhost:3000/venue/all/json`);
            commit("SET_VENUES", result.data);
        },
        async fetchVenue({ commit }, id) {
            const result = await axios.get(`http://localhost:3000/venue/${id}/json`);
            commit("SET_VENUE", result.data);
        },
        async createUser({ commit }, userDetails) {
            this.state.userDetails = userDetails;
            const result = await axios.post("http://localhost:3000/user", this.state.userDetails);
            commit("SAVE_NEW_USER", result.data);
        },
        async createSport({ commit }, sportDetails) {
            this.state.sportDetails = sportDetails;
            const result = await axios.post("http://localhost:3000/sport", this.state.sportDetails);
            commit("SAVE_NEW_SPORT", result.data);
        }
    },
    modules: {}
});
