<!--  -->
<template>
  <MyPie :data="state.salePie" />
  <MyMap :data="state.saleMap" />
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { getAdminStat } from '../../request/api'
import MyPie from './components/MyPie.vue'
import MyMap from './components/MyMap.vue'

const state = reactive<{
  salePie: {}[],
  saleMap: {}[],
}>({
  salePie: [],
  saleMap: []
})

getAdminStat().then(res => {
  if (res.errno === 0) {
    state.salePie = res.data.salePie
    state.saleMap = res.data.saleMap
  }
})

</script>
<style lang='less' scoped>
</style>