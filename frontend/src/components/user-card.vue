<script>
export default {
  name: "UserCard",
  props: ["user"],
  computed: {
    userUrl() {
      return `user/${this.user._id}`;
    }
  }
};
</script>

<template lang="pug">
 article.card
  img(:src="`https://picsum.photos/300/200?random=${user._id}`" alt="user picture")
  h2.card-title 
    router-link(:to="userUrl") {{user.firstName}}
  p {{user.secondName}}
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
