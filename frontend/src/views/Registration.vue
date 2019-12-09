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
            const { firstName, secondName, email, password, location,selectedSports } = this;
            this.createUser({ firstName, secondName, email, password, location, sports: selectedSports });
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
  div(class="form-group")
    label(for="firstName") First name
    input(type="text" v-model="firstName" placeholder="first name" name="firstName" class="form-control")
  div(class="form-group")
    label(for="lastName") Last name
    input(type="text" v-model="secondName" placeholder="last name" name="lastName" class="form-control")
  div(class="form-group")
    label(for="email") Email
    input(type="email" v-model="email" placeholder="email" class="form-control") 
  div(class="form-group")
    label(for="location") Location
    input(type="text" v-model="location" placeholder="location" name="location" class="form-control")
  div(class="form-group")  
    label(for="password") Password
    input(type="password" v-model="password" placeholder="password" name="password" class="form-control")
  div(class="form-group")
    label(for="sports") Sports     
    select(multiple v-model="selectedSports" name="sports" class="form-control")  
      option(v-for="sport in sports", :value= 'sport._id') {{sport.name}}
  button.post-user-button(@click="saveUser()" class="btn btn-primary") Register
  div
</template>

<style scoped></style>
