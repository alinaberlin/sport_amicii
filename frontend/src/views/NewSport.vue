<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "add-sport",
  computed: {
    ...mapState(["sportDetails"])
  },
  data() {
    return {
      name: "",
      minAtendee: 0
    };
  },
  methods: {
    ...mapActions(["createSport"]),
    saveSport() {
      const { name, minAtendee } = this;
      this.createSport({ name, minAtendee });
    }
  }
};
</script>

<template lang="pug">
main
  h2 Add a new sport
  p sport name
  input(type="text" v-model="name" placeholder="sport name")
  p minim atendee
  input(type="text" v-model="minAtendee" placeholder="minimum attendee")
  button.post-sport-button(@click="saveSport()") Add new sport
  div
</template>
<style scoped></style>
