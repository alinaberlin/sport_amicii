
<script>
export default {
    name: "SportEventCard",
    props: ["sportEvent"],
    computed: {
        sportUrl() {
            return `sportEvent/${this.sportEvent._id}`;
        }
    }
};
</script>

<template lang="pug">
 article.card
  img(:src="`https://picsum.photos/300/200?random=${sportEvent._id}`" alt="sportEvent picture")
  h2.card-title 
    router-link(:to="sportUrl") {{sport.name}}
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
