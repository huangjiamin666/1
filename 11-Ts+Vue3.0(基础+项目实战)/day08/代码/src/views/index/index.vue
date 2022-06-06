<!--  -->
<template>
  <MyPie :data="state.salePie" />
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { getAdminStat } from '../../request/api'
import MyPie from './components/MyPie.vue'

const state = reactive<{
  salePie: {}[]
}>({
  salePie: []
})

getAdminStat().then(res => {
  if (res.errno === 0) {
    state.salePie = res.data.salePie
  }
})

</script>
<style lang='less' scoped>
</style>