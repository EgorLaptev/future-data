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

    position: fixed;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);

    height: 24px;
    width: 90%;

    padding: 16px 8px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 100px;
    background: white;

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        color: #dedede;
        cursor: pointer;
        padding: 8px;
        text-decoration: none;
    }

}

</style>