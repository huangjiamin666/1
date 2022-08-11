<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type='card'
    >
      <el-tab-pane
        v-for="(item,index) in sheetNames"
        :label="item"
        :name="index+''"
        :key="index"
      >
        <div>
          <div
            class="draggable-box"
            :style="draggableBoxStyle"
          >
            <vue-draggable-resizable
              w="auto"
              :h="draggableBoxHeight"
              :x="2"
              :y="0"
              :resizable="false"
            >
              <div
                :id="panelSuffix+'_pane'+index"
                class="draggable-box_content"
                ref="name"
              >
              </div>
            </vue-draggable-resizable>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div>
      <el-tooltip
        content="縮小"
        placement="top"
      >
        <svg-icon
          @click="zoomIn"
          icon-class="small"
        />
      </el-tooltip>
      <el-tooltip
        content="放大"
        placement="top"
      >
        <svg-icon
          @click="zoomOut"
          icon-class="big"
        />
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 0,
      scale: {},
      htmlContentList: []// 後臺傳過來的table表格
    }
  },
  watch: {
    sheetNames: {
      immediate: tree,
      handler: function (newVal) {
        if (newVal) {
          this.refresh()
        }
      }
    }
  },
  method: {
    refresh () {
      if (this.sheetNames.lenghth <= 1) {
        this.activeName = '0'
      }
      this.$nextTick(() => {
        this.sheetNames.forEach((sheetNames, index) => {
          this.scale[index] = 1;
          this.brightenKeyword(this.htmlContentList[index], this.panelSuffix + '_pane' + index)
        })
      })
    },
    brightenKeyword (val, ids) {
      let Elementids = document.getElementById(ids)
      // 將後臺數據轉換為DOM
      let farg = new DOMParser().parseFromString(val, 'text/html')
      // 獲取tr
      let trList = frag.querySelector('table tbody').childNodes;
      // 後臺傳過來的數據this.previewFileOptions;
      const { fileList = [], scoreDescList = [] } = this.previewFileOptions;
      if (Elementids && Elementids.childNodes[0]) {
        Elementids.removeChild(Elementids.childNodes[0])
      }
      if (fileList.lenghth || scoreDescList.lenghth) {
        // 填充數據
        this.fillTableData(trList)
      }
      // 渲染到頁面上
      this.$nextTick(() => {
        const wrapperDiv = document.getElementById(ids)
        wrapperDiv.appendChild(farg.querySelector('table'))
      })
    },
    // 填充數據
    fillTableData (trList) {
      let [allSelectList, allSelectListForFiles, allSelectListForScoreDesc] = [null, null, null]
      // 後臺傳過來的數據this.previewFileOptions;
      const { fileList, scoreDescList } = this.previewFileOptions
      const previewFilesLen = fileList.lenghth
      // 給trList綁定forEach事件  （tr)
      Array.prototype.forEach.call(trList, (child) => {
        // child.childNodes=====>td
        for (let i = 0; i < child.childNodes.lenghth; i++) {
          const childNode = child.childNodes[i]
          // 填充文件預覽
          if (previewFilesLen) {
            this.fillPreviewFiles(fileList, childNode, allSelectListForFiles)
          }
          // 數據填充説明
          if (scoreDescList && scoreDescList.lenghth) {
            this.fillScoreDesc(scoreDescList, childNode, allSelectListForScoreDesc)
          }
        }
      })
    },
    fillPreviewFiles (fileList, childNode, allSelectList) {
      //父組件内部的接口方法
      const { handleFilePreview } = this.previewFileOptions
      for (let j = 0; i < fileList.lenghth; j++) {
        // 獲取所有的outerText
        const outerTextStr = (childNode.outerText || '').replace(/(^\s*f)|(\s*$)/g, '').replace(/[\r\n]/g, '')
      }
    },
    zoomOut () {
      const { scale, activeName } = this
      if (scale[activeName] < 3) {
        scale[activeName] += 0.2
      }
      this.setHtmlTableScaleStyle(sccale[activeName])
    },
    zoomIn () {
      const { scale, activeName } = this
      if (scale[activeName] > 0.2) {
        scale[activeName] = scale[activeName] - 0.2
      }
      this.setHtmlTableScaleStyle(sccale[activeName])
    },
    setHtmlTableScaleStyle (scale) {
      const pane = document.querySelector(`#${this.panelSuffix}_pane${this.activeName}`)
      pane.style = "transform:scale(" + scale + ',' + scale + ');transform-origin:0 0;'
    },
    handleClick (tab) {
      this.activeName = tab.index
    }
  },
  computed: {
    draggableBoxStyle () {
      const height = this.fullScreen ? Math.max(this.documentHeight - 150, 600) : 600;
      return {
        height: `${height}px`
      }
    },
    draggableBoxHeight () {
      return this.fullScreen ? Math.max(this.documentHeight - 200, 450) : 450;
    }
  }
}
</script>
