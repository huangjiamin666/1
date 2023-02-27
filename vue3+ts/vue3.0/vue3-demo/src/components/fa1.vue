<template>
  <div class="container">
    父子传值
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money="money" />
    <!-- 子传父 -->
    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son1.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    // 子传父
    const updateMoney = (newMoney) => {
      money.value = newMoney
    }
    return { money,updateMoney }
  }
}
// 父传子：在setup种使用props数据 setup(props){ // props就是父组件数据 }
// 子传父：触发自定义事件的时候emit来自 setup(props,{emit}){ // emit 就是触发事件函数 }
</script>