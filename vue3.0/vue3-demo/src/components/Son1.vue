<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
    <!-- 子传父 -->
    <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
   // props 父组件数据
  // emit 触发自定义事件的函数
  setup (props,{emit}) {
    // 如果要操作props里的数据   在setup里面操作
    // 获取父组件数据money
    console.log(props.money)
        // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      emit('change-money', 50)
    }
    return {changeMoney}
  }
}
</script>