<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import Mapbox from "mapbox-gl-vue";

export default {
    name: "MapEvents",
    components: {
        Mapbox
    },
    computed: {
        ...mapState(["sportEvents", "currentUser"])
    },
    methods: {
        ...mapActions(["fetchSportEvents"])
    },
    created() {
        this.fetchSportEvents();
    }
};
</script>

<template lang="pug">
main 
  mapbox(access-token="pk.eyJ1IjoiYWxpbmFnaGV0bGVyIiwiYSI6ImNqcGlycTFuNjAwY2QzcXFucDBlaWZuejEifQ._BZpp2-Ki_wOqM9w7tSfMA" :map-options="{style: 'mapbox://styles/mapbox/light-v9', center: [52.50,13.14],zoom: 3,}")
</template>

<style scoped>
#map {
    width: 100%;
    height: 500px;
}
</style>
