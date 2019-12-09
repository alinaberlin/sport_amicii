
<script>
export default {
  name: "SportEventCard",
  props: ["sportEvent", "currentUser"],
  computed: {
    sportEventUrl() {
      return `event/${this.sportEvent._id}`;
    }
  }
};
</script>

<template lang="pug">
  tr
    td
      img(:src="`${sportEvent.sport.img}`" alt="sportEvent picture" height="42" width="42")
    td
      router-link(:to="sportEventUrl") {{sportEvent.title}}
    td {{sportEvent.venue.name}}
    td {{sportEvent.maxNumber}}
    td {{sportEvent.date}}
    td 
      router-link(v-if="!sportEvent.participants.includes(currentUser._id)" :to="`/event/${sportEvent._id}/user/${currentUser._id}/join`") Join
      p(v-if="sportEvent.participants.includes(currentUser._id)") You joined this event
</template>

<style scoped>
</style>
