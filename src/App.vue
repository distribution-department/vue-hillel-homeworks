<template>
    <h1>Button group:</h1>
    <BtnGroup/>
</template>

<script>
    import BtnGroup from './components/BtnGroup.vue'

    export default {
        name: 'App',
        components: {
            BtnGroup
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