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
    ...mapState(["sport"])
  },
  methods: {
    ...mapActions(["fetchSport"])
  },
  created() {
    this.fetchSport(this.$route.params.id);
  }
};
</script>

<template lang="pug">
main
  section
  sport-card(:sport="sport")
</template>

<style scoped>
</style>