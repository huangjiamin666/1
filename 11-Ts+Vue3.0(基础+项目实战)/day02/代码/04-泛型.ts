export {}

function fn(n:number|boolean):number|boolean{
  return n
}

fn(100);
fn(true)

// 泛型 可以理解为类型的形参， T是一个标识符,可以自定义， T表示某种类型
// 类型参数化
function fn1<T,G>(n:T,m:G):T{
  return n
}
fn1<number,string>(100,'x')
fn1<boolean,number>(true,10)
fn1<'hello',string>('hello','s')

// let arr:Array<number> = [1]