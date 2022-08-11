<template>
  <div
    :class="{'full-screen':fullScreen}"
    class="position-relative"
    :style="{width:!fullScreen?'100%':documentWidth+'px'}"
  >
    <div class="action">
      <el-tooltip
        :content="fullScreen?'關閉全屏':'全屏'"
        placement='top'
      >
        <i
          class="tet-tl"
          :class="!fullScreen?'el-icon-full-screen':'el-icon-minus'"
          @click="handleFullScreen"
        ></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight
    }
  },
  handleFullScreen () {
    this.documentWidth = document.documentElement.clientWidth,
      this.documentHeight = document.documentElement.clientHeight
    this.fullScreen = !this.fullScreen
    document.querySelector('body').style.overflowY = this.fullScreen ? 'hidden' : 'auto'
  }
})
</script>
<style lang='less'>
.full-screen {
  position: absolute;
  top: 60px;
  left: 0;
  height: 100vh;
  min-height: 600px;
  z-index: 100;
  transition: height 2s ease;
}
</style>
