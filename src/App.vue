<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <AlertComponent :type="alertType" :text="alertText"/>
</template>

<script>
    import AlertComponent from "@/components/AlertComponent";

    export default {
        name: 'App',
        components: {
            AlertComponent
        },
        data() {
            return {
                alertType: 'warning',
                alertText: 'what is love?'
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
