<template>
    <img alt="Vue logo" style="width: 70px" src="./assets/logo.png">
    <h1 class="mt-2">Collapse component:</h1>
    <collapse-element :text="text" :opened="opened"/>
</template>

<script>
    import CollapseElement from "@/components/CollapseElement";

    export default {
        name: 'App',
        components: {
            CollapseElement,
        },
        data() {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia, vero. Accusantium adipisci aperiam assumenda autem debitis, dolore eius error est expedita, inventore ipsam minus mollitia neque porro quas quo sed sequi velit, veniam voluptatum. Ad aperiam consequatur consequuntur esse, et nisi optio quaerat repellendus sit soluta sunt velit vero?',
                opened: true,
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