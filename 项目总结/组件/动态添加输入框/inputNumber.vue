<template>
    <div>
        <div v-if="inputlist.length" class="input_flex">
        <div v-for="(item,index) in inputlist" :key="index" style="display:flex">
        <div>
            {{ index>0?'+':'&nbsp;&nbsp;' }}
        </div>
        <div>
            <div :class="{borError:item.show}">
            <el-input
            class="wd100"
            v-model="item.value"
            @blur="inputChange(item,index)"
            @input="inputValidate($event,item,index)">
        </el-input>
            </div>
            <div v-if="item.show" class="input_number_item_error">{{ item.msg }}</div>
        </div>
        <div>
            <i class="el-icon-delete" v-if="index>0" @click="deleItem(index)"></i>
            <i v-else>&nbsp;&nbsp;</i>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
    inputArry:{
        typeof:Array,
        default(){
            return []
        }
    }
},
data(){
    return {}
},
computed:{
    inputlist(){
        return this.inputArry
    }
},
methods:{
    requiredInput(){
        if(this.inputlist.length){
            this.inputlist.forEach((ele,i)=>{
                if(ele.value==""){
                    this.inputlist[i].show=true
                }
            })
        }
    },
    inputChange(item,i){
        if(item.value){
            this.inputArry[i].show=false
        }else{
            this.inputArry[i].show=true
        }
    },
    inputValidate(value,item,index){
        if(value){
            let val=(value&&value.split(''))||[];
            let reg_=/\d/;
            let reg=/\./;
            if(val[0]=='.'){
                this.inputlist[index].value=""
            }
            val=val.filter(e=>reg_.test(e)||reg.test(e))
            this.inputlist[index].value=val.join('').match(/^\d*(\.?\d{0,2})/g)[0]||'';
        }
    },
    deleItem(index){
        this.$emit('deleItem',index)
    }
}
}
</script>
<style lang="scss" scoped>
.input_flex{
    display:flex;
    flex-wrap:wrap
}
.borError{
    border:1px solid #f56c6c;
    border-radius:3px;
}
.input_number_item_error{
    color:#f56c6c;
    font-size:12px;
    line-height:1;
    padding-top:2px;
}
</style>
