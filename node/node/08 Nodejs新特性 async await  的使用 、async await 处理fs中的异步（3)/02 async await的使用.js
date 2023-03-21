/*

普通方法

    function test(){

        return '您好nodejs';
    }

    console.log(test());
*/


/*
async function test(){   
    return '您好nodejs';
}

console.log(test());  //  Promise { '您好nodejs' }
*/



// await必须得用在async的方法里面，有await，必须有async，不能单独出现

/*
async function test(){  
    return '您好nodejs';
}

async function main(){

    var data=await test();  //获取异步方法里面的数据

    console.log(data);
}
main();
*/



async function test(){  
   return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name='张三 222';   
            resolve(name);
        },1000);
   })

}

async function main(){
    var data=await test();  //获取异步方法里面的数据
    console.log(data);
}
main();