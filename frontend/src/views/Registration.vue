<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
export default {
    name: "registration",
    computed: {
        ...mapState(["userDetails", "sports"])
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            location: "",
            selectedSports:[]
        };
    },
    methods: {
        ...mapActions(["createUser", "fetchSports"]),
        saveUser() {
            const { firstName, lastName, email, password, location,selectedSports } = this;
            this.createUser({ firstName, lastName, email, password, location,selectedSports });
        }
    },
    created() {
        this.fetchSports();
    }
};
</script>

<template lang="pug">
main
  h2 Register here
  p First name
  input(type="text" v-model="firstName" placeholder="user name")
  p Last name
  input(type="text" v-model="lastName" placeholder="last name")
  p Email
  input(type="text" v-model="email" placeholder="email")
  p Location
  input(type="text" v-model="location" placeholder="location")
  p Password
  input(type="password" v-model="password" placeholder="password")
  p
  select(multiple v-model="selectedSports")  
     option(v-for="sport in sports", :value= 'sport._id') {{sport.name}}
  p
  button.post-user-button(@click="saveUser()") Register
  div
</template>

<style scoped></style>
