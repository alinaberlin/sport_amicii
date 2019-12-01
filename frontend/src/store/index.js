import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        users: [],
        user: {}
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
        }
    },
    modules: {}
});
