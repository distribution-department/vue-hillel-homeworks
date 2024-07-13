<template>
    <div class="article-container">

        <div class="article-header">
            <img src="../assets/odd.jpg" alt="">
            <h2>{{article.title}}</h2>
        </div>

        <div class="article-body">{{article.text}}</div>

        <div class="article-footer">Автор: {{article.author}}</div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        props: {
            article: Object
        }
    }
</script>

<style scoped>
    .article-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .article-header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;
    }

    .article-header>img{
        max-width: 300px;
        align-self: flex-start;
    }

    .article-header>h2{
        flex-grow: 1;
        text-align: center;
        text-shadow: 3px 3px 3px rgba(51, 153, 138, 0.4);
    }

    .article-body{
        margin-bottom: 30px;
        margin-top: 30px;
        font-weight: bold;
        font-style: italic;
        font-size: 17px;
    }

    .article-footer{
        width: 100%;
        text-align: right;
        color: rgba(112, 128, 144, 0.8);

    }
</style>