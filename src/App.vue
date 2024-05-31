<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <progress-component :percentage="percentage"/>
</template>

<script>
    import ProgressComponent from "@/components/ProgressComponent.vue";

    export default {
        name: 'App',
        components: {
            ProgressComponent,
        },
        data() {
            return {
                percentage: 40
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
</style>
