import { createRouter, createWebHistory } from 'vue-router';
import VideoList from '../views/VideoList.vue';
import MoreDetails from '../views/MoreDetails.vue';
import CreateVideo from '../views/CreateVideo.vue';
import UpdateVideo from '../views/UpdateVideo.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'VideoList',
    component: VideoList,
  },
  {
    path: '/video/:id_video/details',
    name: 'MoreDetails',
    component: MoreDetails,
  },
  {
    path: '/video/create-video',
    name: 'CreateVideo',
    component: CreateVideo,
  },
  {
    path: '/video/:id_video/update-video',
    name: 'UpdateVideo',
    component: UpdateVideo,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
