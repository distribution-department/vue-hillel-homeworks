<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <CaruselComponent :links="imgLinks"/>
</template>

<script>
    import CaruselComponent from './components/CaruselComponent.vue'

    export default {
        name: 'App',
        components: {
            CaruselComponent
        },
        data() {
            return {
                imgLinks: [
                    {id: 1, link: 'one.jpg'},
                    {id: 2, link: 'two.jpg'},
                    {id: 3, link: 'three.jpg'},
                    {id: 4, link: 'four.jpg'},
                    {id: 5, link: 'five.jpg'},
                ]
            }
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
        margin-top: 60px;
    }

    img {
        max-width: 60px;
    }
</style>