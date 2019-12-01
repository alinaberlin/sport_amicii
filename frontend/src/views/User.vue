<script>
// @ is an alias to /src
import UserCard from "@/components/user-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "User",
  components: {
    UserCard
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["fetchUser"])
  },
  created() {
    this.fetchUser(this.$route.params.id);
  }
};
</script>

<template lang="pug">
main
  section
  user-card(:user="user")
</template>

<style scoped>

</style>