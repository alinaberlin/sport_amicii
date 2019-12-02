<script>
// @ is an alias to /src
import SportCard from "@/components/sport-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Sport",
  components: {
    SportCard
  },
  computed: {
    ...mapState(["sports"])
  },
  methods: {
    ...mapActions(["fetchSports"])
  },
  created() {
    this.fetchSports();
  }
};
</script>

<template lang="pug">
main
  section
    sport-card(v-for="sport in sports", :sport= 'sport') 
</template>

<style scoped>
</style>