<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "Main",
    computed: {
        ...mapState(["currentUser"])
    }
};
</script>
<template>
    <div id="app">
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item" v-if="currentUser">
                    <router-link class="nav-link" to="/event">Events</router-link>
                </li>
                <li class="nav-item" v-if="currentUser">
                    <router-link class="nav-link" to="/myevents">My Events</router-link>
                </li>
                <li class="nav-item" v-if="currentUser">
                    <router-link class="nav-link" to="/sport">Sports</router-link>
                </li>
                <li class="nav-item" v-if="!currentUser">
                    <router-link class="nav-link" to="/">Login</router-link>
                </li>
                <li class="nav-item" v-if="!currentUser">
                    <router-link class="nav-link" to="/registration">Registration</router-link>
                </li>
            </ul>
                        <a class="navbar-brand ml-auto" href="#">Sport Amicii</a>

        </nav>

        <div v-if="$route.name != 'about'" class="container">
            <router-view />
        </div>
        <div v-if="$route.name == 'about'">
            <router-view />
        </div>
    </div>
</template>

<style>
#app {
    font-family: "Gupter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.navbar-brand{
 text-align: right!important;
}
</style>
