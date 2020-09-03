import Vue from "vue";
import VueRouter from "vue-router";
import vuex from "vuex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layouts/index"),
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home.vue"),
        meta: { title: "首页", keepAlive: false },
      },

      {
        path: "/classify",
        name: "Classify",
        component: () => import("../views/classify/Classify.vue"),
        meta: { title: "商城", keepAlive: false },
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/cart/Cart.vue"),
        meta: { title: "购物车", keepAlive: false },
      },
      {
        path: "/mine",
        name: "Mine",
        redirect: "/login",
        component: () => import("../views/mine/Mine.vue"),
        meta: { title: "我的", keepAlive: false },
      },
    ],
  },

  {
    path: "/details",
    name: "details",
    component: () => import("../views/home/Details.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/mine/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
