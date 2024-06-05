<template>
    <h1>Slider:</h1>
    <div class="slider">
        <div class="slider-container">
            <img class="photo" v-for="link of links"
                 :key="link.id"
                 :src="require(`@/assets/pictures/${link.link}`)">
        </div>
        <img class="left-arrow" src="../assets/left.png" alt="" @click="getPreviousSlide">
        <img class="right-arrow" src="../assets/right.png" alt="" @click="getNextSlide">
    </div>
</template>

<script>
    export default {
        name: "CaruselComponent",
        props: {
            links: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        },
        methods: {
            getPreviousSlide() {
                let container = document.querySelector('.slider-container');
                container.prepend(container.lastElementChild);
            },

            getNextSlide() {
                let container = document.querySelector('.slider-container');
                container.style.left = '-500px';
                container.append(container.firstElementChild);
                container.style.left = '0';
            }
        },
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    h1 {
        margin: 10px 0 10px;
    }

    .slider {
        width: 500px;
        height: 281px;
        margin: 0 auto;
        position: relative;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        border-radius: 10px;
    }

    .left-arrow {
        width: 70px;
        height: 70px;
        position: absolute;
        left: 10px;
        top: calc(50% - 35px);
        cursor: pointer;
        transition-duration: 300ms;
        opacity: 0.5;
    }

    .right-arrow {
        width: 70px;
        height: 70px;
        position: absolute;
        right: 10px;
        top: calc(50% - 35px);
        cursor: pointer;
        transition-duration: 300ms;
        opacity: 0.5;
    }

    .left-arrow:hover, .right-arrow:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    .slider-container {
        width: 1000px;
        font-size: 0;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    img {
        max-width: 500px;
    }
</style>