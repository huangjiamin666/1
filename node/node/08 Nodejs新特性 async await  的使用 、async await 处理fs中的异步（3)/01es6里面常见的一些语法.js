/*

方法的简写
    var name='zhangsan';
    var app={
        name,
        run(){

            console.log(`${this.name}在跑步`);
        }
    }

    app.run();



 */




/*
箭头函数   this指向上下文

 setTimeout(function (){

    console.log('执行');
 },1000)


 setTimeout(()=>{

     console.log('执行');
 },1000)

* */


/*回调函数 获取异步方法里面的数据
     function getData(callbck){

        //ajax
        setTimeout(function(){
            var name='张三';
            callbck(name);

        },1000);

     }

     //外部获取异步方法里面的数据

     getData(function(data){
         console.log(data+'111');
     })
* */




/*Promise来处理异步  resolve 成功的回调函数   reject失败的回调函数

 
 var p=new Promise(function(resolve,reject){
     //ajax
     setTimeout(function(){
         var name='张三';

         if(Math.random()<0.7){
            resolve(name);

         }else{
            reject('失败');
         }


     },1000);
 })


 p.then((data)=>{

    console.log(data);
 })

* */



/*

获取异步方法里面的数据

function getData(resolve,reject){

    //ajax
    setTimeout(function(){
        var name='张三';
        resolve(name);

    },1000);

}

var p=new Promise(getData);


p.then((data)=>{

    console.log(data);
})
*/




//  var p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         var name='张三 11';
//         resolve(name);
//     },1000);
//  })

//  p.then(function(data){
//     console.log(data);
//  })


 function getData(resolve,reject){
    //ajax
    setTimeout(function(){
        var name='张三 222';
        resolve(name);

    },1000);

}

var p=new Promise(getData);

p.then((data)=>{
    console.log(data);
})