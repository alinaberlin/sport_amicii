<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "add-venue",
  computed: {
    ...mapState(["venueDetails"])
  },
  data() {
    return {
      name: "",
      address: ""
    };
  },
  methods: {
    ...mapActions(["createVenue"]),
    saveVenue() {
      const { name, address } = this;
      this.createVenue({ name, address });
    }
  }
};
</script>

<template lang="pug">
main
  h2 Add a new venue
  p Venue name
  input(type="text" v-model="name" placeholder="venue name")
  p minim atendee
  input(type="text" v-model="address" placeholder="address")
  button.post-venue-button(@click="saveVenue()") Add new venue
  div
</template>
<style scoped></style>