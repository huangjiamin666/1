<template>
  <div>
    <el-cascader
      v-model="form.register"
      :options="options"
      ref="areaAddr"
      :placeholder="formData.cityName ? formData.cityName : '请选择立案地'"
      :props="propsDistrict"
      @active-item-change="areaChange"
    >
    <!-- 
      @active-item-change
      @expand-change
      @chang
     -->
    </el-cascader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [],
      propsDistrict: {
        label: "label",
        value: "value",
        children: "children",
        chekStrictly: true,
      },
    };
  },
  methods: {
    getprovince() {
      searchP({ isex: true }).then((res) => {
        if ((res.code = 200)) {
          res.data.map((item) => {
            item.value = item.regionCode;
            item.label = item.regionName;
            item.children = [];
          });
        }
        this.options = res.data;
      });
    },
    areaChange(val) {
      if (val.length == 1) {
        this.options.forEach((item) => {
          item.children = [];
        });
        this.options.map((item, index) => {
          if (val[0] == item.value) {
            searchCity({ regionCode: val[0] }).then((res) => {
              if ((res.code = 200)) {
                res.data.map((item) => {
                  item.value = item.regionCode;
                  item.label = item.regionName;
                });
                this.$set(this.options[index], "children", res.data);
                item.children.map((iitem, iindex) => {
                  //二级分类下必须设置一个空的child数组，不然点击没反应
                  this.$set(item.children[iindex], "children", []);
                });
              }
            });
          }
        });
      } else if (val.length == 2) {
        this.options.map((item, index) => {
          item.children.map((items, indexs) => {
            if (val[1] == items.value) {
              searchDistrict({ regionCode: val[0] }).then((res) => {
                if ((res.code = 200)) {
                  res.data.map((item) => {
                    item.value = item.regionCode;
                    item.label = item.regionName;
                  });
                  this.$set(item.children[indexs], "children", res.data);
                }
              });
            }
          });
        });
      }
      console.log(this.$refs['areaAddr'].getCheckedNodes()[0].pathLabels)
    },
  },
};
</script>