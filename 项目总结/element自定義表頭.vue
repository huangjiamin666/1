工作记录 -- el-table自定义表头与表头数据改变不重新不渲染问题(表头嵌套popover弹出框和cascader级联选择器)

背景
对表格的某一列增加筛选操作；el-table自带api貌似有点麻烦而且好像不太适合从服务端拿数据进行处理（我太菜不知道怎么操作~）

解决方案 – 利用插槽
注意的问题：

没有加key的时候数据是没有渲染上
表头不渲染问题： 配合着v-if和对该列增加key值来使用
代码：

<el-table>
	...
	<el-table-column
        show-overflow-tooltip
        min-width="120" 
        :key="Math.random()" 
    >
    <!--设定key值，使表格重新渲染-->
        <template #header>
            缺陷分类
            <el-popover @show="getRules" @hide="getList">
                <el-cascader
                    :options="cascaderOptions"
                    :props="cascaderProps"
                    ref="cascader"
                    v-model="selectedValue"
                    show-overflow-tooltip
                    class="cascader-input"
                    popper-class="cascader"
                    size="small"
                    placeholder="请选择问题分类"
                    collapse-tags
                    clearable
                    @change="selectedChange"
                >
                    <template slot-scope="{ node, data }">
                        <span :title="data.label">{{ data.label }}</span>
                    </template>
                    <input />
                </el-cascader>
                <!--icon-->
                <i slot="reference" class="el-icon-arrow-down el-icon--right add-cursor"></i>
            </el-popover>
        </template>
        <template slot-scope="scope">
            <span>
                {{ scope.row.value || "--"}}
            </span>
        </template>
    </el-table-column>
    ...
</el-table>