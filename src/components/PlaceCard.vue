<template>

    <article class="place">

        <img src="@/assets/images/place.jpg" alt="" class="place__image">

        <div class="place__info">
            <h2 class="place__title"> Дворик Нельсона </h2>
            <router-link :to="{ name: 'map' }" class="place__address">
                Улица Полозова, 6
                <img src="@/assets/icons/pin.svg" alt="" class="place__pin">
            </router-link>
            <button class="place__more"> Узнать больше » </button>
        </div>

        <div class="place__gradient"></div>

    </article>

</template>

<script>
export default {
    name: "PlaceCard"
}
</script>

<style lang="scss" scoped>

.place {

    position: absolute;
    border-radius: 16px;
    width: 90%;
    aspect-ratio: 2/3;
    overflow: hidden;
    margin: 32px auto;
    left: 50%;
    transform: translateX(-50%);

    &__image {
        inset: 0;
        border-radius: 16px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__info {
        position: absolute;
        bottom: 32px;
        left: 24px;
        color: white;
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 6px;
        z-index: 100;
    }

    &__title {
        margin: 0;
    }

    &__subtitle {
        margin: 0;
        padding: 0;
        
    }

    &__more {
        background: none;
        border: none;
        color: #858585;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    &__gradient {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 50%;
        background: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent);
    }

    &__pin {
        padding:  0 0 0 4px;
    }

    &__address {
        text-decoration: none;
        color: inherit;
    }

}

</style>