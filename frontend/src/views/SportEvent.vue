<script>
// @ is an alias to /src
import EventCard from "@/components/event-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Sport Event",
  components: {
    EventCard
  },
  computed: {
    ...mapState(["sportEvent"])
  },
  methods: {
    ...mapActions(["fetchSportEvent", "joinSportEvent"])
  },
  created() {
    if (this.$route.params.id) {
        this.fetchSportEvent(this.$route.params.id);
    } else {
        console.log("Route params", this.$route.params)
        this.joinSportEvent(this.$route.params);
    }
  }
};
</script>

<template lang="pug">
main
  section
  event-card(:sportEvent="sportEvent")
</template>

<style scoped>

</style>