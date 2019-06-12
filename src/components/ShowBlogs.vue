<template>
  <div v-theme:column="'wide'" id="show-blogs"><!--加单引号表字符串-->
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="blog in filteredBlogs">
  <router-link v-bind:to="'/blog/'+blog.id">  <h2 v-rainbow>{{blog.title|to-uppercase}}
  </h2>
  </router-link>
    <article>
    {{blog.body|snippet}}
    </article>
    </div>
  </div>
</template> 

<script>

export default {
  name: 'show-blogs',
  data(){
      return{
        blogs:[],
        search:''
      }
  },
  created(){
     //链接本地json    this.$http.get("./../static/posts.json")
      this.$http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data){
        // console.log(data); 
        this.blogs=data.body.slice(0,10)
          console.log(this.blogs)
      })
  },
  computed:{
      filteredBlogs:function(){
        //过滤filter  拿到数组中的每一条信息
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },
  //局部的
  filters:{
      "to-uppercase":function(value){
         return value.toUpperCase();
     }
  
  }
}
</script>

<style>
#show-blogs{
    max-width:800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background:#ccc;
    border:1px solid #aaa;
}
#show-blogs a{
  color:#444;
  text-decoration:none;
}
input[type="text"]{
  padding:8px;
  width:100%;
  box-sizing:border-box;
}
</style>
