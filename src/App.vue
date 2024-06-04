<template>
    <h1>Carousel:</h1>
    <carousel-element/>
</template>

<script>
    import CarouselElement from './components/CarouselElement.vue'

    export default {
        name: 'App',
        components: {
            CarouselElement
        },
        data() {
            return {}
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>