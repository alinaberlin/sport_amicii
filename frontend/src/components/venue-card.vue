<script>
export default {
    name: "VenueCard",
    props: ["venue"],
    computed: {
        venueUrl() {
            return `venue/${this.venue._id}`;
        }
    }
};
</script>

<template lang="pug">
 article.card
  img(:src="`https://picsum.photos/300/200?random=${venue._id}`" alt="venue picture")
  h2.card-title 
    router-link(:to="venueUrl") {{venue.name}}
</template>

<style scoped>
.card {
    display: inline-block;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 20px;
}
</style>
