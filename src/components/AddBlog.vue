<template>
  <div id="add-blog">
<h2>添加博客</h2>
<form v-if="!submmited">
<label>博客标题</label>
<input type="text" v-model="blog.title" required />
<label>博客内容</label>
<textarea v-model="blog.content"></textarea>

<div id="checkboxes">
<label>vue.js</label>
<input type="checkbox" value="vue.js" v-model="blog.categories">

<label>node.js</label>
<input type="checkbox" value="node.js" v-model="blog.categories">

<label>react.js</label>
<input type="checkbox" value="react.js" v-model="blog.categories">

<label>angular.js</label>
<input type="checkbox" value="angular.js" v-model="blog.categories">
</div>
<label>作者：</label>
<select v-model="blog.author">
<option v-for="author in authors" :key="author">{{author}}</option></select>
<button v-on:click.prevent="post">添加博客</button>
</form>

<div v-if="submmited"><h3>您的博客发布成功</h3></div>

<div id="preview">
<h3>博客总览</h3>
<p>博客标题：
{{blog.title}}</p>
<p>博客内容</p>
<p>{{blog.content}}</p>
<p>博客分类：</p>
<ul>
<li v-for="category in blog.categories" :key="category">{{category}}</li>
</ul>
<p>作者：{{blog.author}}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
    blog:{
      title:'',
      content:'',
      categories:[],
      author:''
    },
    authors:['adfd','dfdf','dfee'],
    submmited:false
    }
  },
  methods:{
    post:function(){
      //请求本地的json，json文件只能放在static中
      //https://jsonplaceholder.typicode.com/  
      //JSONPlaceholder - 免费的在线REST服务（提供测试用的HTTP请求假数据）
      //https://jsonplaceholder.typicode.com/posts
      this.$http.post("https://jsonplaceholder.typicode.com/posts",
      {
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      })
      .then(function(data){
       console.log(data);
       this.submmited=true;
      });
    }
  }
}
</script>
<!--npm install vue-resource --save-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing:border-box;
}
#add-blog{
  margin:20px auto;
  max-width:600px;
  padding:20px
}
label{
  display:block;
  margin:20px 0 10px;
}
input[type="text"],textarea,select{
  display:block;
  width:100%;
  padding:8px;
}
textarea{
  height:200px;
}
#checkboxes label{
  display:inline-block;
  margin-top:0;
}
#checkboxes input{
  margin-right:10px;
  display:inline-block;
}
button{
  display:block;
  margin:20px 0;
  background:crimson;
  color:#fff;
  border:0;
  padding:14px;
  border-radius:4px;
  font-size:18px;
  cursor:pointer;
}
#preview{
  padding:10px 20px;
  border:1px dotted #ccc;
  margin:30px 0;
}
h3{
  margin-top:10px;

}
</style>
