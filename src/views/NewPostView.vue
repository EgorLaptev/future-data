<template>
    <section class="new-post">
        <h1 class="new-post__title"> Добавление места </h1>
        <form action="" class="new-post__form">
            <input type="text" class="new-post__input" placeholder="Название места">
            <input type="text" class="new-post__input" placeholder="Местонахождение">
            <label class="new-post__input">
                <input type="file" class="new-post__file">
                Фото
            </label>
            <input type="submit" class="new-post__input new-post__submit" value="Добавить">
        </form>
    </section>
</template>

<script>
export default {
    name: "NewPostView"
}
</script>

<style lang="scss" scoped>

.new-post {

    &__title {
        margin-top: 160px;
        font-size: 26px;
        color: #333;
    }

    &__form {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;
        width: 90%;
        margin: 50px auto 0 auto;
    }

    &__input {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F8F8F8;
        border-radius: 50px;
        height: 60px;
        text-align: center;
        border: none;
        font-size: 18px;
        &::placeholder {
            color: #858585;
        }
    }

    &__submit {
        background: #4B9EFF;
        color: white;
        cursor: pointer;
    }

    &__file {
        display: none;
    }

}

</style>