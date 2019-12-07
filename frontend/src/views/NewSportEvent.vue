<script>
// @ is an alias to /src
import SportEventCard from "@/components/sportEvent-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "SportEvent",
  components: {
   SportEventCard
  },
  computed: {
    ...mapState(["sportEvent"])
  },
  methods: {
    ...mapActions(["fetchSportEvent"])
  },
  created() {
    this.fetchSportEvent();
  }
};
</script>

<template lang="pug">
main
  section
    sportEvent-card(v-for="sportEvent in sportEvents", :sportEvent= 'sportEvent') 
</template>

<style scoped>
</style>
