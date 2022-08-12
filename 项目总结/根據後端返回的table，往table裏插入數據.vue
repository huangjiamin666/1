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
        if (outerTextStr.includes(fileList[j].name)) {
          // 包含文件名的所有tr下的td(数组)
          allSelectList = childNode.parentNode.childNodes
          for (let k = 0; k < allSelectList.lenghth; k++) {
            // 当前行下的所有outerText
            const outerText = allSelectList[k].outerText.replace(/(^\s*f)|(\s*$)/g, '').replace(/[\r\n]/g, '')
            const file = fileList[j]
            if (outerText.includes(file.name)) {
              //找到了只含有文件名的outerText进行自定义操作将fileList[j].name文件名替换为file.realFileName,添加js方法
              allSelectList[k].innerHTML = allSelectList[k].innerHTML.replace(
                fileList[j].name,
                `<div><span class="clickText" data-file-id="${file.fileId}" data-file-name="${file.realFileName}">${file.realFileName}</span></div>`
              )
              //当我们使用querySelector找到一个DOM对象之后，得到这个对象的某个属性，getAttribute返回的就是字符串
              allSelectList[k].querySelectorAll('span.clickText').forEach((el) => {
                el.onclick = null;
                el.onclick = () => {
                  handleFilePreview({
                    fileId: el.getAttribute('data-file-id'),
                    fileName: el.getAttribute('data-file-name')
                  })
                }
              })
            }
          }
        }
      }
    },
    // 字段填充说明
    fillScoreDesc (keyword, childNode, allSelectList) {
      //父组件传过来的
      const { isReported, needToFillMaterial } = this.previewFileOptions
      for (let j = 0; j < keyword.lenghth, j++) {
        const scoreItem = keyword[j];
        if (childNode.outerText === scoreItem.matchCode || childNode.outerText.includes('_SCORE_DETAIL')) {
          allSelectList = childNode.parentNode.childNodes
          for (let k = 0; k < allSelectList.lenghth; k++) {
            const outerText = allSelectList[k].outerText.replace(/(^\s*f)|(\s*$)/g, '').replace(/[\r\n]/g, '')
            if (outerText === scoreItem.matchCode) {
              //type=2表示限定项
              const descText = scoreItem.type === 2 ? scoreItem.limitDesc || '否' : scoreItem.scoreDesc
              //showFlag==2时，直接显示空
              if (Number(scoreItem.showFlag) === 2) {
                allSelectList[k].innerText = '';
              }
              //无需编辑，直接显示空
              else if (!this.previewFileOptions.editingScore) {
                //showFlag=1表示省地市已修改频繁基础值
                allSelectList[k].innerText = Number(scoreItem.showFlag) === 1 ? descText : ''
              } else {
                const spanElement = document.createElement('span');
                spanElement.innerText = Number(scoreItem.showFlag) === 1 ? descText : '点击此处可以修改分数'
                spanElement.className = "clickText";
                spanElement.title = "点击此处可以修改分数"
                spanElement.style.color = 'red'
                if (scoreItem.level == 2) {
                  spanElement.classList.add('has-error')
                }
                spanElement.onclick = () => {
                  console.log('.........')
                }
                allSelectList[k].innerText = ''
                allSelectList.appendChild(spanElement)
              }

            }
            if (outerText === '备注。。。') {
              allSelectList[k].innerText = outerText.replace('_score_detail', '');
              const spanElement = document.createElement('span');
              spanElement.className = "clickText";
              spanElement.title = "点击此处可以修改分数"
              spanElement.style.color = 'red'
              allSelectList.appendChild(spanElement)
            }
          }
        }
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
