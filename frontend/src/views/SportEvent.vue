<script>
// @ is an alias to /src
import SportEventCard from "@/components/sportEvent-card.vue";
import { mapState, mapActions } from "vuex";
import SportCard from "@/components/sport-card.vue";

export default {
  name: "SportEvent",
  components: {
    SportEventCard
  },
  computed: {
    ...mapState(["sportEvents"])
  },
  methods: {
    ...mapActions(["fetchSportEvents"])
  },
  created() {
    this.fetchSportEvents();
  }
};
</script>

<template lang="pug">
main
  section
  sportEvent-card(v-for="sportEvent in sportEvents", :sportEvent= 'sportEvent') 
</template>

<style scoped></style>
