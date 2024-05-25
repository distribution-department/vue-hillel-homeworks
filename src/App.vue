<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <card-component :title="ttl" :text="txt"/>
</template>

<script>
    import CardComponent from "@/components/CardComponent";

    export default {
        name: 'App',
        components: {
            CardComponent
        },
        data() {
            return {
                ttl: 'hi',
                txt: 'how are you?'
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