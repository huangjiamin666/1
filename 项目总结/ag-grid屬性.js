{
  /* <ag-grid-vue
      @cell-focused="onCellFocused"
      @row-selected="onRowSelected"
      rowSelection = "multipe"
      :suppressRowClickSelection="true"
    >
    </ag-grid-vue>
 */
}

const columnDefs = [//列定义
  {
    field: 'remarks',
    headerClass: ['editable-header-cell', 'ag-center-aligned-header'],
    cellCalass: !isreported ? ['editable-cell'] : ''
  },
  {
    hide: hide,
    field: 'all',
    headerName: '全選',
    width: 130,
    resizable: false,
    pinned: 'left',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    cellCalass: (params) => {
      if (params.data.reportFlag === '0') {
        return 'activeElement'
      }
    },
    cellRender: (params) => {
      if (params.data.reportFlag === '0') {
        let a = document.getElementsByClassName('activeElement');
        for (var i = 0; i < a.length; i++) {
          a[i].getElementsByTagName('input')[0].disabled = true;
          a[i].getElementsByTagName('input')[0].parentNode.style.background = "#909399"
        }
      }
    }
  },
  {
    field: 'orgName',
    header: '公司名稱',
    cellRendererSelector: (params) => {// 路由跳轉
      const { data } = params
      const linkDetails = {
        component: 'tableLink', // 引入的組件或者全局組件
        params: {
          orgName: data.orgName,
          socialId: data.socialId,
          isreported,
        }
      }
      return linkDetails
    }
  },
  {
    field: '',
    valueFormatter: (params) => {
      const { data, colDef } = params
      const celVal = data[colDef.field]
      return Number(celVal) === 1 ? '是' : '否'
    },
    valueSetter: (params) => {
      const { data, colDef } = params
      data[colDef.field] = params.newValue === '是' ? '1' : '0'
      return true
    },
    cellEditorSelector: (params) => {
      return {
        component: 'agSelectCellEditor',// 固定寫法
        params: {
          values: ['是', '否']
        }
      }
    }
  }
]

// 動態添加類和能不能編輯
columnDefs.forEach(columnItem => {
  //editable method
  columnItem.editable = (params) => {
    const editable = iscity ? true : false
    return editable && params.value
  }
  //headerClass method
  columnTtem.headerClass = () => {
    return [iscity ? 'editable-header-cell' : '']
  }
  columnTtem.cellClassRules['editable-cell'] = (params) => {
    return params.value !== null
  }
})


// 渲染=

this.gridApi.setRowData(columnDefs) // 重新設置行數據
this.$nextTick(() => {
  this.gridApi.forEachNode((node, index) => { //初始化渲染
    node.setSelected(node.data.isCheckedC === '1' ? true : false)  //初始化渲染
  })
})

this.gridApi.getSelectedRows() // 獲取選中的數據
onCellFocused(params) {
  const rowNode = this.gridApi.getDisplayedRowAtIndex(params, rowIndex) // 獲取行數據
}
this.gridApi.deselectAll() //清除所有行选择，而不考虑过滤。