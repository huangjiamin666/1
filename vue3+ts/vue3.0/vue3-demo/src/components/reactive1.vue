<template>
  <div class="container" @click="updataName">
      我是响应式数据{{obj.name}}
  </div>
</template>

<script>
import {reactive} from 'vue'
export default{
    name: 're',
        setup(){
            // 通过reactive定义一个响应数据（复杂数据类型，如对象，数组）
          const obj = reactive({
            name: 'le',
            age: 18
          })
          const updataName = () => {
              obj.name='zw'
          }
          return {obj,updataName}
        }
}
// toRef 是函数，转换响应式对象中某个属性为单独响应式数据，并且值是关联的
</script>
