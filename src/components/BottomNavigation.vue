<template>
    <section class="bottom-navigation">
        <router-link :to="{ name: 'home' }" class="bottom-navigation__button">
            <svg class="bottom-navigation__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6562 0C23.9507 0 25 1.04932 25 2.34375V16.4062C25 17.7007 23.9507 18.75 22.6562 18.75H8.59375C7.29932 18.75 6.25 17.7007 6.25 16.4062V2.34375C6.25 1.04932 7.29932 0 8.59375 0H22.6562ZM8.59375 20.3125C6.43984 20.3125 4.6875 18.5602 4.6875 16.4062V6.25H2.34375C1.04932 6.25 0 7.29932 0 8.59375V22.6562C0 23.9507 1.04932 25 2.34375 25H16.4062C17.7007 25 18.75 23.9507 18.75 22.6562V20.3125H8.59375Z"/>
            </svg>

        </router-link>
        <router-link :to="{ name: 'map' }" class="bottom-navigation__button">
            <svg class="bottom-navigation__icon" width="25" height="20" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.71788V18.7491C0 19.2404 0.496094 19.5764 0.952257 19.3941L6.94444 16.6667V0L0.873264 2.42839C0.615529 2.53147 0.394588 2.70941 0.238936 2.93925C0.083285 3.16909 6.17278e-05 3.4403 0 3.71788ZM8.33333 16.6667L16.6667 19.4444V2.77778L8.33333 0V16.6667ZM24.0477 0.0503472L18.0556 2.77778V19.4444L24.1267 17.0161C24.3845 16.913 24.6055 16.7351 24.7611 16.5052C24.9168 16.2754 25 16.0042 25 15.7266V0.695312C25 0.203993 24.5039 -0.131944 24.0477 0.0503472Z"/>
            </svg>
        </router-link>
        <router-link :to="{ name: 'profile' }" class="bottom-navigation__button">
            <svg class="bottom-navigation__icon" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM12.1094 4.6875C14.4824 4.6875 16.4062 6.61133 16.4062 8.98438C16.4062 11.3574 14.4824 13.2812 12.1094 13.2812C9.73633 13.2812 7.8125 11.3574 7.8125 8.98438C7.8125 6.61133 9.73633 4.6875 12.1094 4.6875ZM12.1094 21.4844C9.24316 21.4844 6.6748 20.1855 4.95605 18.1543C5.87402 16.4258 7.6709 15.2344 9.76562 15.2344C9.88281 15.2344 10 15.2539 10.1123 15.2881C10.7471 15.4932 11.4111 15.625 12.1094 15.625C12.8076 15.625 13.4766 15.4932 14.1064 15.2881C14.2188 15.2539 14.3359 15.2344 14.4531 15.2344C16.5479 15.2344 18.3447 16.4258 19.2627 18.1543C17.5439 20.1855 14.9756 21.4844 12.1094 21.4844Z"/>
            </svg>
        </router-link>
    </section>
</template>

<script>
export default {
    name: "BottomNavigation"
}
</script>

<style lang="scss" scoped>

.bottom-navigation {

    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 32px;
    margin: 0 auto;

    height: 60px;
    width: 90%;

    background: #f8f8f8;
    border-radius: 100px;

    &__button {
        background: transparent;
        border: none;
        cursor: pointer;
        &:hover,
        &.router-link-active,
        &.router-link-exact-active {
            .bottom-navigation__icon {
                fill: #4B9EFF;
            }
        }
    }

    &__icon {
        fill: #222;
    }

}

</style>