<!--  -->
<template>
  <div id="pie" style="width: 100%; height: 350px;"></div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  data: {}[]
}>();

onMounted(() => {
  // 初始化实例
  var myChart = echarts.init(document.getElementById('pie') as HTMLElement);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
           fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

</script>
<style lang='less' scoped>
</style>