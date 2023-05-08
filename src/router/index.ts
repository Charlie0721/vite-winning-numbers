import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DataForm from '../components/DataForm.vue';
import ShowInfo from '../components/ShowPaginatedInfo.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'form',
    component:  DataForm
  },
  {
    path: '/data',
    name: 'data',
    component:  ShowInfo
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
