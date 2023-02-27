<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <div>{{count}} <button @click="add()">自增</button></div>  
    <hr>
    <Example1/>
    <hr>
    <Life/>
    <hr>
    <RE/>
    <hr>
    <Toref1/>
    <hr>
    <Toress/>
    <hr>
    <Tos/>
    <hr>
    <Com1/>
    <hr>
    <Com2/>
    <hr>
    <W2/>
    <hr>
    <FAs/>
    <hr>
    <Gf/>
    <hr>
    <VMOD/>
  </div>
</template>

<script>
import {onMounted,onUnmounted,reactive,ref,toRefs} from 'vue'
import Example1 from './components/setup1.vue'
import Life from './components/lifeCycle.vue'
import RE from './components/reactive1.vue'
import Toref1 from './components/toref11.vue'
import Toress from './components/toRefs1.vue'
import Tos from './components/ref.vue'
import Com1 from './components/computed1.vue'
import Com2 from './components/computed2.vue'
import W2 from './components/watch1.vue'
import FAs from './components/fa1.vue'
import Gf from './components/grdFA.vue'
import VMOD from './components/vmodal.vue'
export default {
  name: 'App',
  components: { Example1,Life,RE,Toref1,Toress,Tos,Com1,Com2,W2,FAs,Gf,VMOD},
  setup() {
    // 鼠标移动逻辑
    const mouse = reactive({
      x: 0,
      y: 0
    })
    const move = e =>{
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    onMounted(() =>{
      document.addEventListener('mousemove',move)
    })
    onUnmounted(() =>{
      document.removeEventListener('mousemove',move)
    })

    // 累加逻辑
    const count = ref(0)
    const add = () => {
      count.value ++
    }

    // 返回数据
    return {
      ...toRefs(mouse),
      count,
      add
    }
  }
}
</script>
