<script>
// @ is an alias to /src
import VenueCard from "@/components/venue-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Venue",
  components: {
    VenueCard
  },
  computed: {
    ...mapState(["venues"])
  },
  methods: {
    ...mapActions(["fetchVenues"])
  },
  created() {
    this.fetchVenues();
  }
};
</script>

<template lang="pug">
main
  section
        venue-card(v-for="venue in venues", :venue= 'venue') 
</template>

<style scoped>
</style>

