<template>
  <ag-grid-vue
    id="grid"
    style="height: 650px"
    class="ag-theme-alpine"
    :column-defs="columnDefs"
    :row-data="rowData"
    :defaultColDef="defalutColDef"
    :suppressRowClickSelection="false"
    :suppressRowTransform="true"
    :suppressMovableColumns="true"
    @grid-ready="onGridReady"
    @cell-focused="onCellFocused"
    @cell-value-changed="cellValueChanged"
  >
  </ag-grid-vue>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import { columnDefs } from "./config/param";
export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
      defaultColDef: {
        resizable: true,
        width: 150,
        editable: true,
        singleClickEdit: true,
      },
    };
  },
  components: {
    AgGridVue,
  },
  methods: {
    cellValueChanged(params){
        console.log(params)
    },
    rowSpan(param){
        const arr=['name']
      if (arr.indexOf(param.column.colId) !== -1) {
        // 需要校验的字段
        const data = arr.slice(0, arr.indexOf(param.column.colId) + 1);
        // 每一条第一次出现时对应的索引
        const first = this.tableData.findIndex(item => {
          return data.every(v => item[v] === param.data[v]);
        });
        if (param.node.childIndex === first) {
          // 同一条出现的条数
          const rowspan = this.tableData.filter(item => {
            return data.every(v => item[v] === param.data[v]);
          }).length;
          return rowspan;
        } else {
          return 1;
        }
      }
    }
    },
    onGridReady(param){
        this.gridApi=param.api;
        this.gridColumnApi=param.columnApi
        this.initAgGrid()
    },
    initAgGrid() {
      //配置數據
      this.rowData = [];
      let obj = {};
      forList.getData(obj).then(async (res) => {
        if (res.code == 200) {
          let a = await res.datas;
          a.forEach((item) => {
            this.rowData.push(item);
          });
        }
        this.rowData.forEach((item) => {
          Object.keys(item).forEach((key) => {
            if (typeof item[key] == "number") {
              item[key] = item[key] && item[key].toFixed(2);
            }
          });
        });
        this.columnDefs = columnDefs;
        formatDate(this.columnDefs, this.dataDt);//遍歷循環篩選顯示的時間（通過item.hide=true或者false實現）
        this.columnDefs.forEach((item) => {
          if (item.children) {
            item.children.forEach((items) => {
              //合并單元格
              if (items.cellClass == "span-item") {
                items.rowSpan = (items) => {
                  return this.rowSpan(items);
                };
              }
              // 格式化表格數據
              if (items.type == "percent") {
                items.valueFormatter = (items) => {
                  const { data, colDef } = items;
                  let cellVal = data[colDef.field];
                  return cellVal == null || cellVal === ""
                    ? cellVal
                    : Number(cellVal).toFixed(2);
                };
                items.valueSetter = (items) => {
                  const { data, colDef } = items;
                  // 數據範圍在999到-999之間，保留兩位小數
                  if (
                    (items.newValue && Number(items.newValue) > 999) ||
                    (items.newValue && Number(items.newValue) < -999)
                  ) {
                    this.$message.error("數據格式錯誤");
                    return false;
                  }
                  if (items.newValue.includes(".")) {
                    let lt = items.newValue && items.newValue.split(".");
                    lt = lt[1].toString().split("").length;
                    if (lt > 2) {
                      this.$message.error("數據格式錯誤");
                      return false;
                    }
                  }
                  if(isNaN(Number(items.newValue))){
                    this.$message.error("數據格式錯誤");
                      return false;
                  }
                  if(!isNaN(Number(items.newValue))){
                    data[colDef.field]=items.newValue
                    let cellVal=data[colDef.field]
                    return cellVal
                  }
                };
              }
            });
          }
        });
      });
    },
    // 獲取當前點擊的數據
    onCellFocused(params) {
      const rowNodeFocused = this.gridApi.getDisplayedRowAtIndex(
        params.rowIndex
      );
      console.log(rowNodeFocused, params);
    },
  
};
</script>
<style lang="less">
.ag-center-aligned-header{
    .ag-header-group-cell-label{
        justify-content: center;
    }
}
.ag-theme-alpine .ag-ltr .ag-cell{
    border-right:1px solid #dde2eb;
}
.ag-center-cols-viewport::-webkit-socrollbar{
    height: 0!important;
}
// 豎直滾動條
/deep/.ag-body-horizontal-scroll-viewport{
    &::-webkit-scrollbar{
        height:12px!important;
    }
    &::-webkit-scrollbar-thumb{
        min-width:200px;
    }
}
//水平滾動條
.ag-body-viewport{
&::-webkit-scrollbar{
    width:12px;
}
&::-webkit-scrollbar-thumb{
    min-height: 100px;
}
.ag-body-horizontal-scroll-viewport{
    height:15px !important;
    max-height:15px!important;
    margin-top:-12px !important;
}
}
</style>
<style lang="less" scoped>
/deep/ .ag-theme-alpine{
    height:calc(100vh-405px)!important;
    min-height:350px;
    .ag-root-wrapper.ag-layout-normal{
        height:100%;
    }
    .ag-root.ag-layout-normal{
        height: calc(100vh-405px)!important;
        min-height:350px;
    }
    .ag-cell{
        border-right:1px solid #dde2eb;
    }
    .org-reporting{
        background:lightsteelblue;
    }
}
/deep/ .ag-header-cell-text{
    white-space: normal;
}
/deep/.editable-cell{
    background:lightsteelblue;
}
/deep/ .focused-cell{
    background:#409eff!important;
}
</style>