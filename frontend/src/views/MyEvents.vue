<script>
// @ is an alias to /src
import SportEventCard from "@/components/sportEvent-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "MyEvents",
  components: {
    SportEventCard
  },
  computed: {
    ...mapState(["sportEvents", "currentUser"])
  },
  methods: {
    ...mapActions(["fetchMyEvents"])
  },
  created() {
    this.fetchMyEvents();
  }
};
</script>

<template lang="pug">
main
  table(class="table")
    thead
      tr
        th(scope="col") Sport
        th(scope="col") Title
        th(scope="col") Venue
        th(scope="col") Max number of participants
        th(scope="col") Date
        th(scop="col") Status
    tbody
      sportEvent-card(v-for="sportEvent in sportEvents", :sportEvent= 'sportEvent', :currentUser= 'currentUser') 
  router-link(class="nav-link" to="/add/event") Add Event
</template>

<style scoped></style>
