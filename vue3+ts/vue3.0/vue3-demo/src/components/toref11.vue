<template>
  <div class="container" @click="updataName">
      我是toRef响应数据{{name}}
  </div>
</template>

<script>
// toRef是函数，转换响应式对象中某个属性为单独响应式数据，并且值是关联的。
// 使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据
import {reactive,toRef} from 'vue'
export default{
    name: 're',
        setup(){
            // 通过reactive定义一个响应数据（复杂数据类型，如对象，数组）
          const obj = reactive({
            name: 'le',
            age: 18
          })
    // 假如模板只需要name属性，这时可以使用toRef函数
    // 模板需要多个时，可以使用refs函数
    // 注意 从响应式对象数据中解构出的属性数据，不再是响应数据
          const name=toRef(obj,'name')
          const updataName= () =>{
        // toRef转换响应式数据包装成对象，value存放值的位置
            name.value='df'
          }
          return {name,updataName}
        }
}
</script>
