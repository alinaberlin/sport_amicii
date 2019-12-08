<script>
export default {
    name: "SportCard",
    props: ["sport"],
    computed: {
        sportUrl() {
            return `sport/${this.sport._id}`;
        }
    }
};
</script>

<template lang="pug">
 article.card
  img(:src="`https://picsum.photos/300/200?random=${sport._id}`" alt="sport picture")
  h2.card-title 
    router-link(:to="sportUrl") {{sport.name}}{{sport.minAttendee}}
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
