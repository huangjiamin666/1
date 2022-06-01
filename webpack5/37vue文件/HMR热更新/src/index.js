import './title.js'
import  Vue from 'vue'
import App from './app.vue'
if(module.hot) {
    module.hot.accept(['./title.js'], () => {
        console.log('title.js更新了')
    })
}

new Vue({
    render: h => h(App)
}).$mount('#root')