model是data view是template vm是new vue()



子組件調用父組件内函數的方式
1. 父組件
<template>
  <div>
    <child @fatherMethod="fatherMethod" :fatherMethod="fatherMethod"></child>
  </div>
</template>
<script>
  import child from './components/childcomponent';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        console.log('父组件方法');
      }
    }
  };
  </script>
子組件
<template>
  <div>
    <button @click="childMethod()">点击按钮</button>
  </div>
</template>
<script>
  export default {
    methods: {
      // childMethod() { 
      //   this.$parent.fatherMethod(); 第一種方式
      // },
      // childMethods() {
      //   this.$emit('fatherMethod'); 第二種方式
      // }
      // childMethod() {
      //     this.fatherMethod(); 第三種方式
      //   }
    }
  };
</script>


vue特性：雙向綁定，組件化

#### 生命周期

beforeCreate(创建前) vue实例的挂载元素$el和数据对象 data都是undefined, 还未初始化

created(创建后) 完成了 data数据初始化, el还未初始化

beforeMount(载入前) vue实例的$el和data都初始化了, 相关的render函数首次被调用

mounted(载入后) 此过程中进行ajax交互

beforeUpdate(更新前)

updated(更新后)

beforeDestroy(销毁前)

destroyed(销毁后)

雙向綁定
<input type="text" v-bind:value="message" v-on:input="valueChange">
<input type="text" v-bind:value="message" v-on:input="message=$event.target.value">
valueChange(event){
    this.meaage = event.target.value
}

修飾符
v-model.lazy 可以讓數據在失去焦點或者回車時才會更新
v-model.number 轉換成數字
v-model.trim去除空格

後端渲染：html,css，數據在後端渲染完給到前端的
後端路由：服務器直接生產渲染好對應的html頁面，返回給客戶端展示
  一個頁面有自己對應的網址，也就是url，
  url發送到服務器，服務器會通過正則對該url進行匹配，并且最後交給一個controller進行處理
  controller進行各種處理，最終生成html或者數據返回給前端

  
vue.use(插件)
#### router
###### 动态路由匹配
```vue
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
```vue
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

 当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。 

 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) `$route` 对象 


######  嵌套路由
######  编程式的导航
```vue
当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)
```
```js
// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
```

| **声明式**                        | 编程式              |
| --------------------------------- | ------------------- |
| `<router-link :to="..." replace>` | router.replace(...) |
######  命名路由
```vue
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>


router.push({ name: 'user', params: { userId: 123 }})
```
###### 重定向和别名
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})
```
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
```
###### 路由组件传参
######  HTML5 History 模式

 `vue-router` 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载 
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
###### 导航守卫
- 全局前置守卫
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
- 全局后置钩子- 路由独享的守卫
```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```
- 组件内的守卫
```js
beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave
```
- 路由元信息
```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```