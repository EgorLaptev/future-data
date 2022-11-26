<template>
    <section class="map">
        <div id="map"/>
    </section>
</template>

<script>

import MapModel from "@/models/MapModel";
import PlaceModel from "@/models/PlaceModel";

import store from "@/store";

export default {
    data() {
        return {
            store,
            place: null,
            event: null,
            mapLoaded: false
        }
    },
    methods: {
        async searchById(id) {
            this.place = await PlaceModel.getById(id)
            if (this.place?.coords) {
                if (MapModel.userGeolocation) {
                    MapModel.buildRoute(`${this.place.coords.lat}, ${this.place.coords.lon}`, MapModel.userGeolocation)
                }
            }
            // this.$router.replace({'query': null});
        }
    },
    async mounted() {
        MapModel.init();
    }
}

</script>

<style scoped>

#map {
    width: 100%;
    height: 100%;
}

.map {
    z-index: 1;
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}



</style>