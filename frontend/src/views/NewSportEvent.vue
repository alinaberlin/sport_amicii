<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "NewSportEvent",
  computed: {
        ...mapState(["sportEvent", "sports", "venues"])
    },
    data() {
        return {
            title: "",
            date: "",
            maxNumber: 10,
            venue: {},
            sport: {}
        };
    },
    methods: {
        ...mapActions(["saveSportEvents", "fetchSports", "fetchVenues"]),
        saveEvent() {
            const { title, date, maxNumber, venue, sport } = this;
            console.log("Values", { title, date, maxNumber, venue, sport })
            this.saveSportEvents({ title, date, maxNumber, venue: {_id: venue}, sport: {_id: sport} });
        }
    },
    created() {
        this.fetchSports();
        this.fetchVenues();
    }
};
</script>

<template lang="pug">
main
  h2 New Event
  div(class="form-group")
    label(for="title") Title
    input(type="text" v-model="title" placeholder="title" name="title" class="form-control")
  div(class="form-group")
    label(for="date") Event date
    input(type="date" v-model="date" name="date" class="form-control")
  div(class="form-group")
    label(for="maxNumber") Max number
    input(type="number" v-model="maxNumber" placeholder="10" name="maxNumber" class="form-control") 
  div(class="form-group")
    label(for="venues") Venues     
    select(v-model="venue" name="venues" class="form-control")  
      option(v-for="venue in venues", :value= 'venue._id') {{venue.name}}
  div(class="form-group")
    label(for="sports") Sports     
    select(v-model="sport" name="sports" class="form-control")  
      option(v-for="sport in sports", :value= 'sport._id') {{sport.name}}
  button.post-user-button(@click="saveEvent()" class="btn btn-primary") Save
  div
</template>

<style scoped>
</style>
