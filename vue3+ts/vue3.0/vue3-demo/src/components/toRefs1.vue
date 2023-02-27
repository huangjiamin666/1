<template>
  <div class="container">
    我是toRefs响应数据<div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive,toRefs } from 'vue'
// toRefs是函数，转换响应式对象中所有属性为单独响应式数据，对象成为普通对象，并且值是关联的
// 使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。
export default {
  name: 'App',
  setup () {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 解构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age)
    // const obj2 = {...obj}
    // console.log(obj2)
    // 以上方式导致数据就不是响应式数据了
    const obj3 = toRefs(obj)
    console.log(obj3)

    const updateName = () => {
      // obj3.name.value = 'zs'
      obj.name = 'zs'
    }

    return {...obj3, updateName}
  }
}
</script>