// 主要职责：创建一个vue应用
// 1. 导入createApp函数<br>
// 2. 编写一个根组件App.vue，导入进来<br>
// 3. 基于根组件创建应用实例<br>
// 4. 挂载到index.html的#app容器<br>
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
