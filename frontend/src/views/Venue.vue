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
    ...mapState(["venue"])
  },
  methods: {
    ...mapActions(["fetchVenue"])
  },
  created() {
    this.fetchVenue(this.$route.params.id);
  }
};
</script>

<template lang="pug">
main
  section
  venue-card(:venue="venue")
</template>

<style scoped>
</style>