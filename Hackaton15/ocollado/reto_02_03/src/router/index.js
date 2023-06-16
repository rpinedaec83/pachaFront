import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../view/HomeView.vue';
import NotFound from '../view/NotFound.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;