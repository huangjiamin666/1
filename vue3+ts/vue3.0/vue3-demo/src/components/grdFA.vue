<template>
  <div class="container">
      依赖注入
      provide函数提供数据和函数给后代组件使用
      inject函数给当前组件注入provide提供的数据和函数
    <h1>父组件 {{money}} <button @click="money=1000">发钱</button></h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import Son from './Son2.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const money = ref(100)
    const changeMoney = (saleMoney) => {
      console.log('changeMoney',saleMoney)
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money', money)
    // 将函数提供给后代组件 provide
    provide('changeMoney', changeMoney)

    return { money }
  }
}
</script>