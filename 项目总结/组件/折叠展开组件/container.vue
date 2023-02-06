<template>
    <div>
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-colapse-item name="1">
            <template slot="title">
                <div class="w100">
                    <span class="lfText">{{ Title }}</span>
                    <i :class="classState" class="rgText" type="text">{{ isClose?'展开':'收起' }}</i>
                </div>
            </template>
            <div>
                <slot name="content"></slot>
            </div>
        </el-colapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default{
    name:'containerIndex',
    props:{
        Title:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            isClose:false,
            activeNames:'1'
        }
    },
    computed:{
        classState(){
            return this.isClose?'el-icon-arrow-down':'el-icon-arrow-up'
        }
    },
    methods:{
        handleChange(){
            this.isClose=!this.isClose
        }
    }
}
</script>
<style lang="scss" scoped>
.w100{
    width:100%;
}
.lfText{
    font-size:14px;
    color:#121c32;
    font-weight: 600;
    border-left:3px solid #3470ff;
    height:14px;
    padding:4px 0px 2px 3px;
    box-sizing: border-box;
    margin-left:24px;
}
.rgText{
    float:right;
    padding:18px 42px 0px 0px;
    color:#3470ff;
    font-size: 14px;
    cursor:pointer
}
/deep/ .el-collapse-item_arrow{
    display:none;
}
</style>