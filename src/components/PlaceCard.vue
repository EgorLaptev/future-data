<template>

    <article class="place">

        <img src="" alt="" class="place__image">

        <h2 class="place__title"> Дворик Нельсона </h2>
        <span class="place__address"> Улица Полозова, 6 </span>
        <button class="place__more"> Узнать больше » </button>

    </article>

</template>

<script>
export default {
    name: "PlaceCard"
}
</script>

<style scoped>

.place {

    padding: 32px 24px;
    border-radius: 16px;
    width: 90%;
    height: 80%;

}

</style>