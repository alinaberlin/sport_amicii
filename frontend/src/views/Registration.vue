<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "registration",
  computed: {
    ...mapState(["userDetails"])
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: ""
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    saveUser() {
      const { firstName, lastName, email, password, location } = this;
      this.createUser({ firstName, lastName, email, password, location });
    }
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
  button.post-user-button(@click="saveUser()") Register
  div
</template>

<style scoped></style>
