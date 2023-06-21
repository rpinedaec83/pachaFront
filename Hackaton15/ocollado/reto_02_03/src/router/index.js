import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../view/HomeView.vue';
import NotFound from '../view/NotFound.vue';
import AgregarEditarVideoPage from '../components/pages/video-page/AgregarEditarVideoPage.vue';
import DetalleVideoPage from '../components/pages/video-page/DetalleVideoPage.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeView
    },
    {
        name: 'editarVideo',
        path: '/video/:id',
        component: AgregarEditarVideoPage
    },
    {
        name: 'crearVideo',
        path: '/video',
        component: AgregarEditarVideoPage
    },
    {
        name: 'detalleVideo',
        path: '/video/:id/detalle',
        component: DetalleVideoPage
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