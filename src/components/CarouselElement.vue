<template>
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://images.wallpaperscraft.ru/image/single/most_reka_techenie_100663_1920x1080.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://images.wallpaperscraft.ru/image/single/tropa_les_priroda_1059228_1920x1080.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://images.wallpaperscraft.ru/image/single/ozero_pejzazh_priroda_1164735_1920x1080.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "CarouselElement"
    }
</script>

<style scoped>
    .carousel{
        max-width: 500px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        margin: 0 auto;
    }
</style>