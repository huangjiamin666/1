<template>
  <div class="container" @click="say()">
      我是setup
      {{msg}}
  </div>
</template>

<script>

export default {
  name: 'setup1',
//   Setup是一个新的组件选项，作为组件中使用组合api的起点
// 从组件生命周期来看，在组件实例创建(beforeCreate)之前执行
// 这意味着在setup函数中this还不是组件实例，this此时是underfined
// 在模板中需要使用的数据和函数，需要在setup返回
  setup () {
    const msg ="hihi12"
    const say =()=> {
    console.log("hihi")
    }
    return {msg,say}
  }
}
</script>
