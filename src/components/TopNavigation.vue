<template>

    <section class="navigation">

        <router-link :to="{ name: 'profile' }" class="navigation__item">
            <img src="@/assets/icons/person.svg" alt="" class="navigation__icon">
            А. П. Григорий
        </router-link>

        <router-link :to="{ name: 'newPost' }" class="navigation__item">
            Добавить
            <img src="@/assets/icons/pencil.svg" alt="" class="navigation__icon">
        </router-link>

    </section>

</template>

<script>

import PlaceCard from "@/components/PlaceCard";
export default {
    name: "TopNavigation",
    components: {PlaceCard}
}
</script>

<style lang="scss" scoped>

.navigation {

    position: relative;
    z-index: 1000;

    height: 56px;
    max-width: 680px;
    width: 90%;

    margin: 32px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 100px;

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        color: #dedede;
        background: white;
        height: 40px;
        border-radius: 25px;
        cursor: pointer;
        padding: 8px 16px;
        text-decoration: none;
    }

}

</style>