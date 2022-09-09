element el-cascader 动态加载次级选项，防止重复加载，异步请求三级数据——旧版本，后被lazyLoad代替
element el-cascader 动态加载次级选项，防止重复加载，异步请求三级数据
 
本篇文章解决的问题：

1，绑定事件@active-item-change点击后无反应

2，需要动态加载到第三级，官网例子只给了第二级，比如（省、市、区）（顶级分类、二级分类、三级分类）

3，已经加载过的数据防止重复加载

下面是代码

复制代码
<template>
  <el-cascader
    :options="platOptions"
    @active-item-change="handleItemChange"
    :props="props"
  ></el-cascader>
</template>
 
<script>
export default {
  data () {
    return {
      platOptions: [],
      props: {
        label: 'name',
        value: 'id',
        children: 'child'
      }
    }
  },
  methods: {
    getPlatCategory () {
      // 请求顶级分类
      this.$axios.get('/api/getCategory')
        .then(res => {
          if (res.status === 200) {
            this.platOptions = res.data.data
            this.platOptions.map((item, index, array) => {
              // 因为数组和对象更新后不会更新视图，这里必须用$set方法
              this.$set(array[index], 'child', [])
            })
          }
        }).catch(error => {
          let langmsg = this.$i18n.locale === 'zh' ? error.data.zhmsg : error.data.enmsg
          this.$message.error(langmsg)
        })
    },
    handleItemChange (value) {
      // 动态/异步加载分类数据
      let parentId
      if (value.length === 1) {
        // 如果点击的是一级分类
        parentId = value[0]
        this.platOptions.map((item, index) => {
          if (item.id === parentId && item.child.length === 0) {
            // 当顶级分类的的child为空时才请求数据
            this.$axios.get('/api/getCategorySon', {
              params: {
                parent_id: parentId
              }
            }).then(res => {
              if (res.status === 200) {
                this.$set(this.platOptions[index], 'child', res.data.data)
                item.child.map((innerItem, innerIndex) => {
                  // 二级分类下必须要设置一个空的child数组，不然点击@active-item-change没反应
                  this.$set(item.child[innerIndex], 'child', [])
                })
              }
            })
          }
        })
      } else {
        // 如果点击的是二级分类，则直接将三级分类绑定到platOptions
        parentId = value[1]
        this.platOptions.map((item, index) => {
          item.child.map((innerItem, innerIndex) => {
            if (innerItem.id === parentId && innerItem.child.length === 0) {
              // 当二级分类的的child为空时才请求一次数据
              this.$axios.get('/api/getCategorySon', {
                params: {
                  parent_id: parentId
                }
              }).then(res => {
                if (res.status === 200) {
                  this.$set(item.child[innerIndex], 'child', res.data.data)
                }
              })
            }
          })
        })
      }
    }
  }
}
</script>