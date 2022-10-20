// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "ag-grid-community/styles/ag-grid.css";//网格“结构”样式表
import "ag-grid-community/dist/styles/ag-theme-alpine.css";//网格主题
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
