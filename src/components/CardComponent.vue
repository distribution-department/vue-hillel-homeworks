<template>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title" v-if="title">{{ title }}</h4>
            <p className="card-text" v-if="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            title: String,
            text: String
        }
    }
</script>

<style scoped>
    .card {
        width: 70%;
        margin: 10px auto;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
</style>