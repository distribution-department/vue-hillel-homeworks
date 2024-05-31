<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <definitions-component :definitions="definitions"/>
</template>

<script>
    import DefinitionsComponent from "@/components/DefinitionsComponent.jsx";

    export default {
        name: 'App',
        data() {
            return {
                definitions: [
                    {dt: 'one', dd: 'two', id: 1},
                    {dt: 'another term', dd: 'another description', id: 2},
                ]
            }
        },
        components: {
            DefinitionsComponent
        },
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
