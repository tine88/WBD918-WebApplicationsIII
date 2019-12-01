import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import ComponentDemo from "../components/ComponentDemo";
import ManagePosts from "../views/ManagePosts";
import ShowDemo from "../views/ShowDemo";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: '/manage-posts',
    name: 'manage-posts',
    component: ManagePosts
  },
  {
    path: '/demo',
    name: 'demo',
    component: ComponentDemo
  },
  {
    path: '/show-demo',
    name: 'show-demo',
    component: ShowDemo
  }

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
];

const router = new VueRouter({
  routes
});

export default router;
