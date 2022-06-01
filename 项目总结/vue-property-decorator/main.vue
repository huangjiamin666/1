<template>
  <div ref="ulList">
    <UlList
      :show.sync="dialogVisible"
      :modId="red"
      :option="dgd"
    />
  </div>
</template>
<script>
import { Component, Ref, Vue } from 'vue-property-decorator'  // 必須
import UlList from './ullist'


// 第三方控件Vue-draggable-resizable定制化可拖動控件
@Component({  // 這個必須要表示vue組件
  components: {
    UlList
  }
})
export default class NewWrite extends Vue {   // 必須
  data = []   // 相當於 data(){}
  level = null // 相當於 data(){}
  dialogVisible = false
  @Ref('ulList') ulList
  get download () { // computed
    return '1111'
  }
  // 沒有methods，直接寫各種方法
  dosomething () {
    console.log(data)
    this.ulList.loading = true
  }
  mounted () {
    console.log(data)
  }
  beforeMounted () {
    console.log(data)
  }

}
  </script>
