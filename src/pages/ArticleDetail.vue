<template>
    <div class="details-article-container">
        <Article :article="page"/>
    </div>
</template>

<script>
    import Article from "../components/Article.vue";

    export default {
        name: "ArticleDetail",
        components: {Article},
        data() {
            return {
                page: {}
            }
        },
        methods: {},
        mounted() {
            this.page = {...JSON.parse(localStorage.getItem('currentPageElement'))};
            localStorage.setItem('currentPageElement', '{}');
        }
    }
</script>

<style scoped>
    .details-article-container {
        min-width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>