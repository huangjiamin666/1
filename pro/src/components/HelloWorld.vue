<template>
  <div class="hello">
    <div ref="wrapper" class="wrapper" :style="{height:height+'px'}">
      <div class="content" v-if="list.length">
        <div v-for="(item,index) in list" :key="item.index">
          {{ item.name }}
        </div>
      </div>
      <div v-else class="nodata">
        暂无数据
      </div>
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HelloWorld',
  data () {
    return {
      scroll:null,
      height:0,
      pageNum:1,
      pageSize:10,
      count:6,
      list:[],
      total:0,
      allNum:0
    }
  },
  created(){
    // this.getList(1)
    this.list=[
        {name:'111111'},
        {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},         
         
         {name:'111111'},

         {name:'111111'},

         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
         {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
        {name:'111111'},
      ]
  },
  watch:{
    list(val){
      this.$nextTick(()=>{
        this.height=document.documentElement.clientHeight&&document.documentElement.clientHeight-60
        this.scroll=null
        this.scroll=new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:3,
          scrollY:val.length?true:false,
          pullUpLoad:{
            threshold:-10
          },
          pullDownRefresh:{
            stop:0,
            threshold:40,
          },
          obserDOM:true,
        })
        if(val){
          this.scroll.on('pullingUp',async()=>{
            if(this.pageNum<this.allNum){
              ++this.pageNum
              await this.getList(this.pageNum)
              this.scroll.finishPullUp()
              this.scroll.refresh()
            }
          })
        }
      })
    }
  },
  methods:{
    getList(current){
      let obj={
        pageNum:current?current:this.pageNum,
        pageSize:this.pageSize,
        idNumber:this.userInfo&&this.userInfo.idNum,
        isRegistered:1
      }
      // 滚动分页相关逻辑
      // ajax(obj).then(res=>{
      //   let resultList=res.data.modelData.list;
      //   this.list=[...this.list,...resultList]
      //   this.total=res.data.modelData.total
      //   this.allNum=Math.ceil(this.total/this.pageSize)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  overflow:hidden
}
.content{
  min-height:500px;
}
.nodata{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%)
}
</style>
