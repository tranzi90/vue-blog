import MainPage from "@/pages/MainPage"
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage"
import DetailsPage from "@/pages/DetailsPage"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: DetailsPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router