<template>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card</p>
            <button type="button" className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardComponent"
    }
</script>

<style scoped>
    .card{
        width: 70%;
        margin: 10px auto;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
</style>