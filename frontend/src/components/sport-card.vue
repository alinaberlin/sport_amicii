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
  img(:src="`${sport.img}`" alt="sport picture" height="42" width="42")
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
