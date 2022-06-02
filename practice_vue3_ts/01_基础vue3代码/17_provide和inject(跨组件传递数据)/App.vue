<template>
  <h2>provide 与 inject</h2>
  <h3>当前的颜色:{{color}}</h3>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <Son></Son>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { provide, defineComponent, ref } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  name: "App",
  setup() {
    const color = ref("red");
    provide("color", color);
    return {
      color,
    };
  },
  components: {
    Son,
  },
});
</script>

<style>
</style>
