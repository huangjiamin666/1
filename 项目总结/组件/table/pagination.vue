<template>
  <div>
    <el-plagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="[2,10,20,50]"
      :page-size="pageSize"
      layout="total,sizes,prev,pager,next,jumper"
      :total="total"
      </el-pagination
    >
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      typer: Number,
      default: 0
    },
    // 每頁條數
    pageSize: {
      typer: Number,
      default: 12
    },
    // 當前頁數
    current: {
      typer: Number,
      default: 1
    },
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('sizePage', val)
    },
    handleCurrentChange (val) {
      this.$emit('currentPage', val)
    }
  }
}
</script>
