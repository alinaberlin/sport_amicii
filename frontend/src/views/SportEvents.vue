<script>
// @ is an alias to /src
import SportEventCard from "@/components/sportEvent-card.vue";
import { mapState, mapActions } from "vuex";
import Mapbox from "mapbox-gl-vue";

export default {
    name: "SportEvents",
    components: {
        SportEventCard,
        Mapbox
    },
    computed: {
        ...mapState(["sportEvents", "currentUser"])
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
  table(class="table")
    thead
      tr
        th(scope="col") Sport
        th(scope="col") Title
        th(scope="col") Venue
        th(scope="col") Max number of participants
        th(scope="col") Date
        th(scop="col") Join
    tbody
      sportEvent-card(v-for="sportEvent in sportEvents", :sportEvent= 'sportEvent', :currentUser= 'currentUser') 
  router-link(class="nav-link" to="/add/event") Add Event
      
</template>

<style scoped></style>
