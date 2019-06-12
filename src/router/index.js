import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     // name: 'HelloWorld',
     component: ShowBlogs
    },
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/ShowBlogs',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {path:'/blog/:id',
    component:SingleBlog}
  ],
  mode:'history'//去除#
})
