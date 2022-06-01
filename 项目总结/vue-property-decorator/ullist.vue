<template>
  <div v-if="visible">11</div>
  <el-dilog
    :before-close="close.bind(this,false)"
    :visible.sync="visible"
  />
</template>
<script>
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'
@Component({})
export default class Utilst extends Vue {
  @PropSync('show', { type: Boolean, default: false }) visible
  @Prop({ type: [String, Number], description: '模型定義id' }) modId
  @Prop({ type: Object, description: '配置項', default: () => { } }) option
  dosomething () {
    console.log(this.visible, this.modId, this.option)
  }
  close () {
    this.$emit('update:show', false)  // 這樣寫就不用在父頁面寫事件接受促發的事件，是語法糖
  }
}
// @PropSync與@Prop的區別是子組件可以對props進行修改，並同步給父組件 此時父組件綁定props時需要加修飾符.sync

/*
<message :show.sync="msgSHOW"/>
相當於
<message :show="msgSHOW" @update:show="val=>msgSHOW=val"
*/
</script>
