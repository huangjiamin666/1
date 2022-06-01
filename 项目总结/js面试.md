    ##                     JS基础
#### 数据类型(8种)
```js
基本类型（值）
String
Number
Boolean
Undefined
BigInt                                                                                     
Symbol(es6)
Array.from()  將一個類數組對象或者可遍歷對象轉換成一個真正的數組（es6)

vue页面iframe 中加入loading="lazy"可以做到滚动到iframe处再加载

JS找出两个数组中不相同的元素
let arr1 = [0,1,2,3,4,5];
let arr2 = [0,4,6,1,3,9];

const _arr1 =arr1.filter(item1 => !arr2.includes(item1));
const _arr2 =arr2.filter(item2 => !arr1.includes(item2));
// some,filter,includes
const _arr =_arr1.concat(_arr2)
console.log(_arr1); //[2, 5, 6, 9]

对象引用类型（引用）保存地址
Null
Object : Date、Array
Function

```
判断
#### typeof类型运算符 返回数据类型的字符串（不能判断null和object,object与array）
```js
typeof undefined // undefined
typeof 'abc' // sting 
typeof true // boolean
typeof {} // object
typeof [] // object
typeof null // object
typeof console.log // function
```
####  instanceof 类型运算符 判断对象的具体类型
```js
var arr = []
arr instanceof Array // true 
typeof arr // object 
// 需要判断变量是某一种具体的类型,需要instanceof判断
// 从函数的_proto_一层一层往上找,找到他的构造函数的的prototype


instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
```


1. null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。

2. 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object


```
#### toString```
Object.prototype.toString.call('') ;  // [object String]
Object.prototype.toString.call(1) ;   // [object Number]
Object.prototype.toString.call(true) ;// [object Boolean]
Object.prototype.toString.call(Symbol());//[object Symbol]
Object.prototype.toString.call(undefined) ;// [object Undefined]
Object.prototype.toString.call(null) ;// [object Null]
Object.prototype.toString.call(newFunction()) ;// [object Function]
Object.prototype.toString.call(newDate()) ;// [object Date]
Object.prototype.toString.call([]) ;// [object Array]
Object.prototype.toString.call(newRegExp()) ;// [object RegExp]
Object.prototype.toString.call(newError()) ;// [object Error]
Object.prototype.toString.call(document) ;// [object HTMLDocument]
Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用


```
#### js内置对象
```
Array Object Number Math Date Function Symbol String JSON
```
#### 原型 原型链
```
 构造函数new出实例,每个实例的proto指向原型,构造函数的prototype指向原型,实例对象的construtor指向构造函数
 
 当从实例对象上访问某个属性时,会先从实例本身上寻找,找不到就从原型上找,原型上没有就往原型的原型上找,直到找到null为止
 
 
①所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象
②所有函数都有一个prototype(原型)属性，属性值是一个普通的对象
③所有引用类型的__proto__属性指向它构造函数的prototype
```
#### new一个对象的过程 
```js
创建一个新的对象
继承父类原型上的方法
添加父类的属性到新的对象上并初始化, 保存方法的执行结果
如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
```
```

```
#### 说明this几种不同的使用场景
```js
作为构造函数执行
作为对象属性执行
作为普通函数执行
call apply bind
```
#### 	call() 
```
call() 方法是预定义的 JavaScript 方法
它可以用来调用所有者对象作为参数的方法
通过 call()，您能够使用属于另一个对象的方法
```
```js
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates",
}
person.fullName.call(person1);  // 将返回 "Bill Gates"
```


#### apply() 改变this  数组形式传参
```
call() 方法分别接受参数
apply() 方法接受数组形式的参数
如果要使用数组而不是参数列表，则 apply() 方法非常方便。
```
```js
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]); //"John Doe,Oslo,Norway"
```


#### bind()
```js
bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值，例如：f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj
```#### 手写深拷贝
```

function deepClone (obj) {
    // 判断参数
    // 是普通值或者null就直接返回
    if(typeof obj !== 'object' || typeof obj == null) {
        return obj
    }
    // 申明返回数据
    let result 
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    // 循环源数据
    for(let key in obj) {
        console.log(obj[key])
        result[key] = deepClone(obj[key])
    }
    return result
}

let obj1 = {a: 1, b:2, c: {d:3}}
let obj2 = deepClone(obj1)

obj1.c.d = 4
console.log(obj1,obj2)
```




#### 数组的基本方法
###### toString()    join() 
```js
let arr =  ["Banana", "Orange", "Apple", "Mango"]
arr.toString()
// Banana,Orange,Apple,Mango
arr.join()
// Banana,Orange,Apple,Mango
arr.join('*')
// Banana * Orange * Apple * Mango
```
######  pop()   push() 
```js
let arr =  ["Banana", "Orange", "Apple", "Mango"]
arr.pop()  ==> ["Banana", "Orange", "Apple"] // 删除最后一个元素
arr.push("Mango") ==> ["Banana", "Orange", "Apple", "Mango"] // 向结尾添加一个元素
```
######  shift()  unshift() 
```js
let arr =  ["Banana", "Orange", "Apple", "Mango"]
arr.shift()  //删除首个数组元素
arr.unshift() //在开头）向数组添加新元素
```
######  splice()  删除拼接数组

第一个参数 定义了应添加新元素的位置（拼接）

第二个参数 定义应删除多少元素

 其余参数（“Lemon”，“Kiwi”）定义要添加的新元素 
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
```
######  concat()  合并（连接）现有数组来创建一个新数组 
```js
A. concat(B,C) 
```
######  slice()  数组的某个片段切出新数组 
```js
可接受两个参数，比如 (1, 3)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); 
```
######  sort() 函数按照*字符串*顺序对值进行排序 
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); 
```










```js

```
#### DOM操作
```
document.getElementById('abc')
document.querryselectAll('p')
添加 父元素.appendChild() 
移除 removeChild() 
复制 cloneNode(true/false) 
创建 crateElement() 
... 
```
- DOM是那种基本的数据结构

  ```
  树
  ```

- DOM操作的常用的API有哪些

- DOM节点的attribute 和 property 有何区别

  property只是一个js对象的属性的修改

  Attribute是对html标签属性的修改

#### JavaScript作用域

#### 闭包

```
函数嵌套函数

内部的函数可以引用外部函数的参数或者变量

参数和变量不会被垃圾回收机制回收，因为内部函数还在引用

优点: 
变量可以长期驻扎在内存之中

避免全局变量的污染，有私有成员```
内存泄漏：意外的全局变量，没有清除定时器，闭包
缺点：容易造成内存泄漏，内存泄漏严重会导致内存溢出
解决：少用，及时释放
如何产生闭包
1当一个嵌套的内部函数引用了嵌套的外部函数内的变量时，
2.执行内部函数就产生了闭包
function f1() {
  var a= 2
var b = ‘abc’
function fn2(){
console.log(a)
}
fn2()
}
f1()
场景 1 将函数作为另外一个函数的返回值
     2 将函数作为实参传递给另外一个函数调用
函数和变量不被引用会被垃圾回收器回收

#### 实现防抖

防抖：触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间（取最后一次） 思路：每次触发前都取消之前的延时调用方法

```
  function debounce(fn, delay) {
   let timer = null
   return function() {     let self = this // 这获取 this 是因为 debounce() 返回的是内部函数，在这才能捕获到 this。     let args = Array.prototype.slice.call(arguments)     if (timer) clearTimeout(timer) // 取消之前的 timer     timer = setTimeout(function () {       fn.call(self, ...args) // 防止 this 指向改变，确保上下文为当前的this，传递参数     }, delay)
   }
 }
 function testFn() {
  console.log('被点击了', this)
 }
 // 测试
document.addEventListener('click', debounce(testFn, 1000)) ```

#### 实现节流

节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率 思路：每次触发事件时都判断当前是否有等待执行的延时函数，需要一个标记

```
function throtting(fn, delay) {
   let timer = null
   let isCancel = false
   return function() {     if (isCancel) return     isCancel = true     clearTimeout(timer)     let self = this;     let args = Array.prototype.slice.call(arguments)     if (timer) clearTimeout(timer)     timer = setTimeout(function () {       fn.call(self, ...args)       isCancel = false     }, delay)
   }
 }
 function testFn() {
  console.log('输入了', this)
 }
document.addEventListener('input', throtting(testFn, 1000)) ```

#### event loop和宏任务、微任务

```
一段代码块就是一个宏任务。所有一般执行代码块的时候，也就是程序执行进入主线程了，主线程会根据不同的代码再分微任务和宏任务等待主线程执行完成后，不停地循环执行。

主线程（宏任务） => 微任务 => 宏任务 => 主线程
```

```

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {    console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {    console.log('promise1');    resolve();
  }).then(function() {    console.log('promise2');
  });
console.log('script end');```

常见的宏任务和微任务

```
宏任务: script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。```

```
微任务: Process.nextTick（Node独有）、Promise、Object.observe(废弃)
Promise.then catch finally	```





#### Promises

```
setTimeout、Promise、Async/Await 的区别

事件循环中分为宏任务队列和微任务队列
其中setTimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行async函数表示函数里面可能会有异步方法，await后面跟一个表达式
async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行```



#### ES6新特性

```
let 不具备变量提升
const 在声明时必须被赋值，否则会报错
使用let和const时不能重复声明

var、let、const之间的区别?
var声明变量可以重复声明，而let不可以重复声明
var是不受限于块级的，而let是受限于块级
var会与window相映射（会挂一个属性），而let不与window相映射
var可以在声明的上面访问变量，而let有暂存死区，在声明的上面访问变量会报错
const声明之后必须赋值，否则会报错
const定义不可变的量，改变了就会报错
const和let一样不会与window相映射、支持块级作用域、在声明的上面访问变量会报错```
###### 模版字符串

````${xxx}aaa`

ES6的模板字符串有哪些新特性？并实现一个类模板字符串的功能?
基本的字符串格式化。
将表达式嵌入字符串中进行拼接。
用${}来界定在ES5时我们通过反斜杠()来做多行字符串或者字符串一行行拼接。
ES6反引号(``)就能解决类模板字符串的功能	```
###### 箭头函数

```js
不需要用关键字function来定义函数
一般情况下可以省略return
在箭头函数内部，this并不会跟其他函数一样指向调用它的对象，而是继承上下文的this指向的对象

let add = (a, b) => a + b

// 当参数只有一个时，可以将括号省略
let sqrt = a => a*a

使用箭头函数应注意什么？
用了箭头函数，this就不是指向window，而是父级（指向是可变的）
不能够使用arguments对象
arguments 参数集合
function f3() {
  console.log(arguments) //arguments[2]
}
f3(1,2,3,4,5,6)

箭头函数中使用 ...rest参数
var f3=(...value)=> {
  console.log(value[2])
}
f3(1,2,3,4,5,6)
var id='a'
var obj = {
  id:1,
  // action:function(){
  //   console.log(this.id) // 1
  // }
  action: ()=> {
    console.log(this.id) // a 箭头函数对应的对象内没有this,此时的上下文是window
  }
}
obj.action()
不能用作构造函数，这就是说不能够使用new命令，否则会抛出一个错误
不可以使用yield命令，因此箭头函数不能用作 Generator 函数
箭头函数没有原型

```
###### 函数可以设置默认参数值
```js

old
function printText(text){
   var text = text || "hello world!"
   console.log(text)
}
new 
function printText(text = "hello world!") {
    console.log(text);
}
```
###### 对象和数组解构
```js
let person = {name: "Peter",age: 22,career: "student"}
const {name, age, career } = person
console.log(`Hello, my name is ${name}, and my career is ${career}.`)    //Hello, my name is Peter, and my career is student.
```
###### filter()    可以过滤数组，包含满足条件的数组项，返回一个新数组 
```js
let arr = [1, 2, 3];
let newArr = arr.filter((item, index, arr) => {
    return item <= 2;
})
console.log(arr) // [1, 2, 3]
console.log(newArr) // [1, 2]
```
###### some()  返回布尔值，如果有一个满足条件的值则返回true
```js
let arr = [1, 2, 3];
let result = arr.some((item, index, arr) => {
    return item < 2;
})
console.log(result) // true
```
###### every()   返回布尔值，如果所有数组项都满足条件则返回true 
```js
let arr = [1, 2, 3];
let result = arr.every((item, index, arr) => {
    return item < 2;
})
console.log(result) // false
```
###### map()  遍历  返回一个新的数组 
```js
let arr = [1, 2, 3];
let newArr = arr.map((item, index, arr) => {
    return item * 2;
})
console.log(arr) // [1, 2, 3]
console.log(newArr) // [2, 4, 6]
```
###### forEach()  不能中断遍历，没有返回值  没有return
```js
let arr = [1, 2, 3];
arr.forEach((item, index, arr) => {
    console.log(item)
})
```
###### find()和findIndex()

ES5中可以通过`indexOf()`和`lastIndexOf()`查找与特定值匹配的元素
ES6中的`find()`和`findIndex()`可以根据某个条件去查找匹配的元素 

 `find()`返回查找的值，`findIndex()`返回查找的值的索引，两者都只返回第一个满足条件的值 
```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(n => n > 3)); // 4
console.log(numbers.findIndex(n => n > 3)); // 3
```
###### includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false
```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
```
###### 遍历器 keys() values()
```js
let arr = ['a', 'b', 'c'];
let iterator = arr.keys()
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}
```
```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```
```js
let arr = ['a', 'b', 'c'];
let iterator = arr.values();

for (const value of iterator) {
  console.log(value); // expected output: "a" "b" "c"
}
```
```js
var arr = ["a", , "c"];
var sparseKeys = Object.values(arr);
var denseKeys = [...arr.values()];
console.log(sparseKeys); // ["a", "c"]
console.log(denseKeys);  // ["a", undefined, "c"]
```




## CSS3
####  选择器 
```css
E:nth-child(n) 选择器匹配其父元素的第n个子元素，不论元素类型，n可以使数字，关键字，或公式
E:nth-of-type(n) 选择与之其匹配的父元素的第N个子元素
E:frist-child 相对于父级做参考，“所有”子元素的第一个子元素，并且“位置”要对应

```
```css
text-shadow:2px 2px 8px #000;参数1为向右的偏移量，参数2为向左的偏移量，参数3为渐变的像素，参数4为渐变的颜色
text-overflow:规定当文本溢出包含元素时发生的事情  text-overflow:ellipsis(省略)
text-wrap:规定文本换行的规则
white-space: 规定如何处理元素中的空白  white-space:nowrap 规定段落中的文本不进行换行
```
```css
border-raduis:50%边框的圆角
border-image 边框图片
.XXX {
    border-image-source:url(images/border.png);
    boder-image-slice:27;
    border-image-width:10px;
    border-iamge-repeat:round; (round平铺) 平铺效果不作用于四角，只适应与四边  
}
```
```css
transition-property:width //property为定义过渡的css属性列表，列表以逗号分隔
transition-duration:2s; //过渡持续的时间
transition-timing-function:ease;
transition-delay:5s  //过渡延迟5s进行
```
```css
animation
transform ：translate（x,y) rotate(deg) scale(x,y)
translate
scale
rotate
skew（倾斜）
```
```css
@media
```
#### 盒模型
```
ie      盒子组成部分为 内容宽度(border+content+padding)+margin 
标准模型 四个部分组成   content+border+padding+margin
```
## CSS3的新特性
- word-wrap 文字换行- text-overflow 超过指定容器的边界时如何显示- text-decoration 文字渲染- text-shadow文字阴影- gradient渐变效果- transition过渡效果 transition-duration：过渡的持续时间- transform拉伸，压缩，旋转，偏移等变换- animation动画

transition和animation的区别：

  Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。


## HTML5
```
语义化标签: header, footer,nav,section,article,aside,video,audio
新增表单元素: email,month,number...
canvas绘图
SVG绘图 区分HTML和HTML5: 在文档类型的声明上,h5为<!DOCTYPE html>，之前版本比较长
```
## cookie localStorage SessionStorage
###### 数据上的生命周期的不同
```js
Cookie 一般由服务器生成，可设置失效时间，如果在浏览器端生成cookie，默认是关闭后失效
localStorage 除非被永久清除，否则永久保存
sessionStorage 仅在当前会话会有效，关闭页面或浏览器后被清除
```
###### 存放数据的大小不同
```js
Cookie 一般为4kb
localStorage 和 sessionStorage 一般为5mb
```
###### 与服务器端通信不同
```js
Cookie 每次都会携带HTTP头中，如果使用cookie保存过多数据会带来性能问题
localStorage 和 sessionStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信
```
###### 应用场景
```js
能不用cookie 就不用
```

HTML5History
 History interface是浏览器历史记录栈提供的接口，通过back(),forward(),go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。
 从HTML5开始，History interface提供了2个新的方法：pushState(),replaceState()使得我们可以对浏览器历史记录栈进行修改：
```js
window.history.pushState(stateObject,title,url)
window.history,replaceState(stateObject,title,url)
```




## 原型链

实例对象 --> 构造函数 --> 原型

构造函数new出实例对象 实例对象的_proto_ 属性指向原型  构造函数的prototype指向原型 实力对象的con's'tructor指向构造函数



当我们访问实例对象的属性时，先从实例对象本身开始查找，然后从对象的原型上查找， 对象的原型的原型上查找，直到原型链的末端 null



## 项目的难点

keepAlive 缓存的页面关闭掉仍然有缓存



解决方案

嵌套一个页面

利用

  <keep-alive>

   <newOrder :key="id"></newOrder>

  </keep-alive>

key值的变换去决定组件的缓存


## 前端分页


## vue跨域处理  域名 协议 端口 有一个不同都是跨域
跨域是怎么来的，由于前后端分离，即使是域名，协议一样，但不存在两个相同的端口，所以有跨域
```js
module.exports = {
  devServer: {
    port: 8080
    // open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.10.134:8086', //API服务器的地址
    //     // ws: true, //代理websockets
    //     changeOrigin: true, //虚拟的站点需要更管origin
    //     pathRewrite: {
    //       //重写路径比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  productionSourceMap: false
}

```

vue.config.js




## axios
```js
// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
  ``config => {
    ``if` `(token) { ``// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      ``config.headers.Authorization = token;
    ``}
    ``return` `config;
  ``},
  ``err => {
    ``return` `Promise.reject(err);
  ``});
```
```js
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  ``response => {
    ``return` `response;
  ``},
  ``error => {
    ``if` `(error.response) {
      ``switch` `(error.response.status) {
        ``case` `401:
          ``// 这里写清除token的代码
          ``router.replace({
            ``path: ``'login'``,
            ``query: {redirect: router.currentRoute.fullPath}``//登录成功后跳入浏览的当前页面
          ``})
      ``}
    ``}
    ``return` `Promise.reject(error.response.data)
  ``});
```

 `Axios.defaults.headers.common[``'Authorization'``] = AUTH_TOKEN;``//配置token,看情况使用` 






## 唤起相机和获取图片

 <input type="file" accept="image/*" capture="camera" > 

 <input type="file"  multiple="multiple" accept="image/*"  multiple> 



 <input type="file" accept="video/*" capture="camcorder"> 



 <input type="file" accept="audio/*" capture="microphone"> 






## 字体图标




## HTTP与HTTPS的区别
- HTTP的URL由`http://`起始且默认使用端口80，而HTTPS的URL由`https://`起始且默认使用端口443- HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的 SSL 加密传输协议- HTTP的连接很简单，是无状态的，HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全
## HTTP状态码
**1xx表示客户端应该继续发送请求**
**2xx表示成功的请求**
- 200表示OK，正常返回信息- 201表示请求成功且服务器创建了新的资源- 202表示服务器已经接受了请求，但还未处理
**3xx表示重定向**
- 301表示永久重定向，请求的网页已经永久移动到新位置- 302表示临时重定向- 304表示自从上一次请求以来，页面的内容没有改变过
**4xx表示客户端错误**
- 401表示服务器无法理解请求的格式- 402表示请求未授权- 403表示禁止访问- 404表示请求的资源不存在，一般是路径写错了
**5xx表示服务器错误**
- 500表示最常见的服务器错误- 503表示服务器暂时无法处理请求
## 性能优化
- 使用CDN- gzip压缩- 文本压缩- 合并请求- 雪碧图- 图片懒加载- 缓存资源- 减少DOM操作
## 组件data为什么返回函数

组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data。如果单纯的写成对象形式，就使得所有组件实例共用了一份data，造成了数据污染。


## 数组去重
```
let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
function unique1(arr){
	let result = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		let item = arr[i];
		if(result.indexOf(item) == -1){
			result.push(item);
		}
	}
	return result;
}
console.log(unique1(arr));
```
## null和undefined区别

Undefined类型只有一个值，即undefined。当声明的变量还未被初始化时，变量的默认值为undefined。用法：
- 变量被声明了，但没有赋值时，就等于undefined。- 调用函数时，应该提供的参数没有提供，该参数等于undefined。- 对象没有赋值的属性，该属性的值为undefined。- 函数没有返回值时，默认返回undefined。

Null类型也只有一个值，即null。null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。用法
- 作为函数的参数，表示该函数的参数不是对象。- 作为对象原型链的终点。
## calc函数

calc函数是css3新增的功能，可以使用calc()计算border、margin、pading、font-size和width等属性设置动态值。
```
#div1 {
    position: absolute;
    left: 50px;
    width: calc( 100% / (100px * 2) );
    //兼容写法
    width: -moz-calc( 100% / (100px * 2) );
    width: -webkit-calc( 100% / (100px * 2) );
    border: 1px solid black;
}
```
## 移动端rem

rem官方定义『The font size of the root element』，即根元素的字体大小。rem是一个相对的CSS单位，1rem等于html元素上font-size的大小。所以，我们只要设置html上font-size的大小，就可以改变1rem所代表的大小。
```js
(function () {
    var html = document.documentElement;
    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
    }
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();
```

HTTP 握手

 第一次握手：客户端发送syn包(syn=j)到服务器，并进入SYN_SEND状态，等待服务器确认；

第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；

第三次握手：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。 

#### flex
```
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content

```
#### diff vue

将真实DOM生成虚拟DOM然后进行比较,达到局部更新和复用DOM的一个效果, 会比较标签名和key
#### 伪元素和伪类

都跟选择器相关
伪类可以理解为元素的一种特殊状态 例如hover active
伪元素相当于元素特殊位置的一种效果 after before
    
