<template>
    <TopNavigation/>
    <router-view/>
    <BottomNavigation/>
</template>

<style lang="scss">

* {
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

body, html {
    margin: 0;
    padding: 0;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
<script>
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
export default {
    components: {BottomNavigation, TopNavigation}
}
</script>