import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostListView from '../views/PostListView.vue'
import PostDetailView from '../views/PostDetailView.vue'
/* eslint-disable */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/post',
    name: 'post',
    component: PostListView
  },
  {
    path: '/post/:id',
    name: 'postdetail',
    component: PostDetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
