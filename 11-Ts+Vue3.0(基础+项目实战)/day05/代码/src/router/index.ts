import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue'
// import Vue from 'vue';
// Vue.use(VueRouter)
//Vue2 use : 调用的就是参数上的install方法，或者是直接调用参数。Vue.prototype.$router/$route

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/homepage/homepage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // 路由配置
});

export const initRouter = (app: App<Element>) => {
  app.use(router);
}

// export default router