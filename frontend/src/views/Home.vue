<script>
// @ is an alias to /src
import UserCard from "@/components/user-card.vue";
import SportCard from "@/components/sport-card.vue";

import { mapState, mapActions } from "vuex";

export default {
    name: "home",
    components: {
        UserCard
        
    },
    computed: {
        ...mapState(["users", "counter"]),
    },
    methods: {
        ...mapActions(["fetchUsers", "incrementCounter"]),

    },
    created() {
        this.fetchUsers();
    }
};
</script>

<template lang="pug">
  main
    section
        user-card(v-for="user in users", :user= 'user') 
    section
    button.increment-button(@click="incrementCounter") Increment 
    div {{counter}}
</template>

<style scouped>
section{
    padding: 40px 0;
}
.increment-button {
    color: darkcyan;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid darkcyan;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
}
.increment-button:hover {
    background-color: darkcyan;
    color: white;
}
</style>
