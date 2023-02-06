<el-form-item label="各批次">
    <i class="el-icon-circle-plus-outline" @click="addlist"></i>
    <input-number :inputArry="arrylist" @deleItem="deleItem" ref="compName3"/>
</el-form-item>
import inputNumber from './inputNumber'
data(){
    return {
        arrylist:[{value:'',show:false,msg:'请输入批次清退金额'}]   
    }
}
methods:{
    addlist(){
        this.arrylist.push({value:'',show:false,msg:'请输入批次清退金额'})
    },
    deletItem(i){
        this.delelist(i)
    },
    delelist(i){
        this.arrylist[i].value=0;
        this.arrlist.splice(i,1)
    }
}