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
      address: "",
      selectedSports: []
    };
  },
  methods: {
    ...mapActions(["createVenue", "fetchSports"]),
    saveVenue() {
      const { name, address, selectedSports } = this;
      this.createVenue({ name, address, sports: selectedSports });
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
  select(multiple v-model="selectedSports")  
     option(v-for="sport in sports", :value= 'sport._id') {{sport.name}}
  p   
  button.post-venue-button(@click="saveVenue()") Add new venue
  div
</template>
<style scoped></style>