<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <BtnGroup/>
</template>

<script>
    import BtnGroup from "@/components/BtnGroup";

    export default {
        name: 'App',
        components: {
            BtnGroup,
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

    img{
        max-width: 80px;
    }

</style>
