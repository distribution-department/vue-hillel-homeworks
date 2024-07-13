import {createWebHistory, createRouter} from 'vue-router'

import BlogMainList from './pages/ArticleList.vue'
import BlogAddArticle from './pages/AddArticle.vue'
import BlogShowDetail from './pages/ArticleDetail.vue'

const routes = [
    {path: '/', component: BlogMainList, name: 'blogs'},
    {path: '/add', component: BlogAddArticle, name: 'add'},
    {path: '/details/:id', component: BlogShowDetail, name: 'details'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;