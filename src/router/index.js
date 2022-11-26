import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from "@/views/MapView";
import ProfileView from "@/views/ProfileView";
import NewPostView from "@/views/NewPostView";
import LoginView from "@/views/LoginView";

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/add',
    name: 'newPost',
    component: NewPostView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
