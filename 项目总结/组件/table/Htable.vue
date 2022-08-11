<template>
  <el-table
    :data="data"
    :border="!!border"
    style="width: 100%"
    :header-cell-style="headerCellStyle"
    :max-height="$attrs.maxHeight"
    :empty-text="emptyText"
    @select="selection"
    @select-all="selectionAll"
    @selection-change="handleSelectionChange"
    v-bind="othersConfig"
  >
    <template v-if="showSelection">
      <el-table-column
        :label="indexColumnOptions.label || ''"
        type="selection"
        :fixed="indexColumnFixed"
        :width="60"
      />
    </template>
    <template v-if="showIndex">
      <el-table-column
        :label="indexColumnOptions.label || '序号'"
        type="index"
        :fixed="indexColumnFixed"
        :width="indexColumnOptions.width || 70"
        :align="indexColumnOptions.align || 'left'"
        :show-overflow-tooltip="indexColumnOptions.showOverflowTooltip || false"
        :index="indexMethod"
      />
    </template>
    <template v-for="columnItem in realColumns">
      <template v-if="!columnItem.slot">
        <el-table-column
          :key="columnItem.key"
          :label="columnItem.label"
          :prop="columnItem.key"
          :align="columnItem.align || 'left'"
          :fixed="columnItem.fixed || false"
          :show-overflow-tooltip="columnItem.showOverflowTooltip || true"
          :min-width="columnItem.minWidth"
        >
          <template slot-scope="scope">
            {{
              columnItem.formatData
              ?
              columnItem.formatData(scope.row[columnItem.key],scope.row)
              : 
              scope.row[columnItem.key]===null || scope.row[columnItem.key]==='--'
              ? '--'
              : scope.row[columnItem.key]
            }}
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <slot :name="columnItem.slot"></slot>
      </template>
    </template>
  </el-table>
  <pagination
    v-if="pagingInfo.total>0"
    :total="pagingInfo.total"
    :pageSize="pagingInfo.pageSize"
    :current="pagingInfo.pageNum"
    @currentPage="currentPageFn"
    @sizePage="sizePageFn"
  />
</template>
<script>
import pagination from './pagination'
export default {
  components: {
    pagination,
  },
  name: 'HTable',
  props: {
    border: Boolean,
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    indexColumnOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    headerCellStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    maxHeight: String,
    emptyTextf: {
      type: String,
      default: '暂无相关信息'
    },
    pageInfo: {
      type: Object,
      default: () => {
        return {
          total: 0,
          pageSize: 10,
          pageNum: 1,
        }
      }
    }
  },
  data () {
    return {
      indexMethodPageInfo: {
        total: 0,
        pageSize: 10,
        pageNum: 1,
      }
    }
  },
  wtach: {
    loading: {
      immediate: true,
      handler: function (newVal) {
        if (!newVal) {
          this.indexMethodPageInfo = JSON.parse(JSON.stringify(this.pagingInfo))
        }
      }
    },
  },
  computed: {
    indexColumnFixed: function () {
      return this.indexColumnOptions.fixed || this.realColumns.some(column => !!column.fixed)
    },
    realColumns () {
      const columns = this.columns.filter(column => {
        column.label = typeof column.label === 'function' ? column.label() : column.label;
        return column.iif ? column.iif() : true
      })
      return columns
    }
  },
  methods: {
    selection (val) {
      this.$emit('selection', val)
    },
    selectionAll (val) {
      this.$emit('selectionAll', val)
    },
    handleSelectionChange (val) {
      this.$emit('selectionChange', val)
    },
    indexMethod (index) {
      const { pageSize, pageNum } = this.indexMethodPageInfo
      if (this.indexColumnOptions.indexMethod) {
        return this.indexColumnOptions.indexMethod(index)
      } else {
        return (pageNum - 1) * pageSize + index + 1
      }
    },
    currentPageFn (pageNum) {
      this.pagingInfo.pageNum = pageNum
      this.$emit('pagingChange', { pageNum, pageSize: this.pagingInfo.pageSize })
    },
    sizePageFn (pageSize) {
      this.pagingInfo.pageSize = pageSize
      this.$emit('pagingChange', { pageSize, pageNum: 1 })
    }
  }
}
</script>
