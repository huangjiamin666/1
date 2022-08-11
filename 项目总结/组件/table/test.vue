<template>
  <h-table
    :data="tableData"
    :paging-info="pageable"
    @pagingChange="getlist"
    :columns="tableColumns"
    show-index
    :indexColumnOptions="{indexMethod}"
  >
    <template slot="actions">
      <el-table-column
        show-oveflow-tooltip
        fixed="right"
        align="center"
        label="操作"
        min-width="145"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click='goDetail(scope)'
          >查看</el-button>
        </template>
      </el-table-column>
    </template>
  </h-table>
</template>
<script>
import { formatDate } from './tools.js'
export default {
  data () {
    return {
      pageable: {
        total: 0,
        pageSize: 10,
        pageNum: 1
      },
      tableColumns: [
        {
          key: 'dest',
          label: () => {
            return this.flag ? '管轄' : '時間'
          },
          fixed: true,
          minWidth: 250,
          align: 'center',
          showOverflowTooltip: true
        },
        {
          key: 'reportName',
          label: '监管报告名称',
          fixed: true,
          minWidth: 250,
          showOverflowTooltip: true
        },
        {
          key: 'reportPeriod',
          label: '报告周期',
          formatData: reportPeriod => {
            return reportPeriod === 'MONTH' ? '月' : '--'
          },
          minWidth: 250,
          showOverflowTooltip: true
        },
        {
          key: 'generateDate',
          label: '生成日期',
          minWidth: 300,
          formatData: (val, row) => {
            return formatDate(val)
          },
          showOverflowTooltip: true
        },
        {
          key: 'generateDate',
          label: '生成日期',
          minWidth: 300,
          formatData: (val, row) => {
            return `${val}/${row.val}`
          },
          iff: () => this.flag,
          showOverflowTooltip: true
        },
        {
          slot: 'actions'
        }
      ]
    }
  }
}
</script>
