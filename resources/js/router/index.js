import { createRouter, createWebHistory } from "vue-router";

import App from '../components/App.vue'
import notFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
