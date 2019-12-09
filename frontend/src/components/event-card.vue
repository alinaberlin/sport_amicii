
<script>
export default {
  name: "EventCard",
  props: ["sportEvent"]
};
</script>

<template lang="pug">
  div(class="container")
    div(class="row")
      div(class="col-sm")
        img(:src="`${sportEvent.sport.img}`" alt="sportEvent picture" height="42" width="42")
      div(class="col-sm") {{sportEvent.title}}
      div(class="col-sm") {{sportEvent.venue.name}}
    div(class="row" v-if="sportEvent.participants.length > 0")
      div(class="col-sm") 
        table(class="table")
          thead
            tr
              th(scope="col") Firt Name
              th(scope="col") Last Name
          tbody    
            tr(v-for="user in sportEvent.participants")
              td {{user.firstName}}
              td {{user.secondName}}
    tbody
          
</template>

<style scoped>
</style>
