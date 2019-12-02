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
];

const router = new VueRouter({
  routes
});

export default router;
