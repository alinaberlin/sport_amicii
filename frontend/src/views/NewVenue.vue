<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "add-venue",
  computed: {
    ...mapState(["venueDetails", "sports"])
  },
  data() {
    return {
      name: "",
      address: ""
    };
  },
  methods: {
    ...mapActions(["createVenue", "fetchSports"]),
    saveVenue() {
      const { name, address, sports } = this;
      this.createVenue({ name, address, sports });
    }
  },
  created() {
    this.fetchSports();
  }
};
</script>

<template lang="pug">
main
  h2 Add a new venue
  p Venue name
  input(type="text" v-model="name" placeholder="venue name")
  p Address
  input(type="text" v-model="address" placeholder="address")
  p Sports
  select(multiple v-model="sports")  
     option(v-for="sport in sports", :value= 'sport._id') {{sport.name}}
  p
  button.post-venue-button(@click="saveVenue()") Add new venue
  div
</template>
<style scoped></style>