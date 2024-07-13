<template>
    <div class="container">
        <nav>
            <img src="./assets/vue.svg" class="logo" alt="Vite logo"/>
            <div class="links">
                <a class="waves-light btn" :class="{ disabled: isLoad }"
                   @click="roteToBlogsList">Все статьи</a>
                <a class="#f9a825 yellow darken-3 btn" :class="{ disabled: isLoad }"
                   @click="roteAddNewArticle">Добавить статью</a>
            </div>
        </nav>
        <main>
            <Loader class="loader" v-if="isLoad"/>
            <RouterView v-if="!isLoad" :blogs="allArticles" @newBlogs="getNewBlogs"/>
        </main>
        <footer>
            &#169 Copyrights
        </footer>
    </div>
</template>

<script>
    import userRequest from "./functions/requests";
    import Loader from "./components/Loader.vue";
    import ArticleList from "./pages/ArticleList.vue";

    export default {
        components: {ArticleList, Loader},
        data() {
            return {
                isLoad: true,
                allArticles: [],
            }
        },
        methods: {
            roteToBlogsList() {
                this.$router.push({name: 'blogs'})
            },
            roteAddNewArticle() {
                this.$router.push({name: 'add'})
            },
            getNewBlogs(response) {
                let lastBlog = response.blogs.at(-1);
                this.allArticles.push(lastBlog);
            },

            async getRequest() {
                let data = userRequest.getRequest();
                await data.then(resp => this.allArticles = [...resp.blogs]);
                this.isLoad = false;
            }

        },
        mounted() {
            this.getRequest()
        }
    }
</script>


<style scoped>
    .container {
        min-height: 100vh;
        width: 85%;
        background-color: white;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        position: relative;
    }

    nav {
        width: 100%;
        padding: 10px;
        background-color: slategray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
        z-index: 5;
    }

    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em rgba(208, 210, 245, 0.67));
    }

    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-right: 10px;
    }

    main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-bottom: 63px;
        min-height: calc(100vh - 64px);
        min-width: 100%;
        z-index: 1;
    }

    footer {
        width: 100%;
        padding: 20px;
        background-color: slategray;
        color: white;
        text-align: right;
        font-style: italic;
        position: absolute;
        bottom: 0;
        letter-spacing: 1px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
        z-index: 5;
    }
</style>
