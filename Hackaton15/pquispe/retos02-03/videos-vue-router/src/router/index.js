import { createRouter, createWebHistory } from 'vue-router';
import VideoList from '../views/VideoList.vue';
import MoreDetails from '../views/MoreDetails.vue';
import AddVideo from '../views/AddVideo.vue';
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
    path: '/video/add-video',
    name: 'AddVideo',
    component: AddVideo,
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
