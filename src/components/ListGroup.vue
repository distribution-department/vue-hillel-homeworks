<template>
    <slot name="navbar"></slot>
    <ul class="list-group">
        <slot name="list-childrens"></slot>
    </ul>
</template>

<script>
    export default {
        name: "ListGroup"
    }
</script>

<style scoped>
    nav{
        background-color: red;
    }

    .list-group{
        max-width: 60%;
        margin: 20px auto;
        box-shadow: 0 0 10px rgba(128, 128, 128, 0.3);
    }
</style>