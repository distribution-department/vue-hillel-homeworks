<template>
    <h1>Slider:</h1>

    <div id="carousel" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
            <div class="carousel-item"
                 v-for="(link, index) of links"
                 :key="index"
                 :class="{ active: isActive ===  index}">
                <img alt="" class="d-block w-100" :src="require(`@/assets/pictures/${link.link}`)">
            </div>
        </div>

        <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Prev</span>
        </button>
        <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
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
            return {
                isActive: 0
            }
        },
        methods: {},
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    h1 {
        margin: 10px 0 10px;
    }

    .carousel {
        width: 500px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        overflow: hidden;
    }

    img {
        max-width: 500px;
    }
</style>`