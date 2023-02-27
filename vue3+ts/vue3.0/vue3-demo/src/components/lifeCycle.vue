<template>
  <div class="container">
    我是生命周期
  </div>
</template>

<script>
// 所有的钩子写在setup里面
// setup创建实例前
// onBeforeMount 挂载DOM前
// onMounted挂载dom后
// onBeforeUpdate更新组件前
// onUpdated更新组件后
// onBeforeUnmount 卸载销毁前
// onUnmounted卸载销毁后
  import {onBeforeMount,onMounted} from 'vue'
  export default{
    name: 'life',
    setup(){
      // dom渲染前钩子
      onBeforeMount(()=>{
        console.log(111)
      })
      // dom渲染后钩子
      onMounted(()=>{
        console.log(222)
      })
       onMounted(()=>{
        console.log(333)
      })
      // 可以定义多个相同的够着函数，区分不同实现的功能
    }
  }
</script>
