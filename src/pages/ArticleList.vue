<template>
    <h2 v-if="blogs.length < 1">Нет статей</h2>

    <div class="list-container" v-if="blogs.length > 0">

        <div class="article" v-for="blog of blogs" :key="blog.id">
            <img src="../assets/odd.jpg" alt="Logo">
            <div class="article-body">
                <div class="article-title">{{blog.title}}</div>
                <a class="waves-light btn article-btn" @click="showArticle(blog)">Детали</a>
            </div>
        </div>

    </div>

</template>

<script>
    import {toRaw} from 'vue';

    export default {
        name: "ArticleList",
        props: {
            blogs: {
                type: Array,
            }
        },
        data() {
            return {
                currentArticle: null
            }
        },
        methods: {
            showArticle(article) {
                this.currentArticle = {...article};
                let page = toRaw(this.currentArticle);
                localStorage.setItem('currentPageElement', JSON.stringify(page));
                this.$router.push({name: 'details', params: {id: page.id}});
            }
        },
    }
</script>

<style scoped>
    .list-container {
        min-width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    h2{
        color: rgba(112, 128, 144, 0.8);
    }

    .article {
        display: flex;
        flex-direction: row;
        width: 500px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        overflow: hidden;
    }

    .article-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        gap: 10px;
        padding-bottom: 5px;
    }

    .article-title {
        font-weight: bold;
        text-align: center;
        font-size: 17px;
        text-shadow: 3px 3px 3px rgba(51, 153, 138, 0.4);
    }

    img {
        width: 200px;
        transition-duration: 300ms;
    }

    img:hover {
        transform: scale(1.1);
    }


</style>