<template>
  <div class="hello">
   <ag-grid-vue
    class="ag-theme-alpine"
    :column-defs="columnDefs"
    :row-data="rowData"
   ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       columnDefs: null,
        rowData: null,
    }
  },
   components: {
    AgGridVue,
  },
  beforeMount() {
    this.initAgGrid();
  },
  methods: {
    initAgGrid() {
      // 配置列属性
      this.columnDefs = [
        {
          field: "name", // 对应数据字段
          headerName: "姓名", // 标题名
          width: 160, // 宽度
        },
        {
          field: "studentID",
          headerName: "学号",
          width: 160,
        },
        {
          field: "grade",
          headerName: "分数",
          width: 160,
        },
      ];
      // 配置数据
      this.rowData = [
        {
          name: "小红",
          studentID: "20210001",
          grade: 99,
        },
        {
          name: "小刚",
          studentID: "20210002",
          grade: 78,
        },
        {
          name: "小铭",
          studentID: "20210003",
          grade: 100,
        },
        {
          name: "小果",
          studentID: "20210004",
          grade: 67,
        },
      ];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
