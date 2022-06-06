export {}

// 枚举不是用来定义类型，列举数据用的
// enum Xxx{
//   a = 10,
//   b = "200",
// }

enum StatusCode{
  success=200,
  paramsError=400,
  serverError=500
}

let code:string|number = 400;
if(code===StatusCode.success){
  console.log("成功");
}else if(code===StatusCode.paramsError){
  console.log("失败，请求参数问题");
}else if(code===StatusCode.serverError){
  console.log("失败，服务器问题");
}

enum StatusCode2{
  success,  // 0
  paramsError=400,  // 400
  serverError  // 401
}
console.log(StatusCode2.success,StatusCode2.paramsError,StatusCode2.serverError);
