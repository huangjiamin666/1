"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举不是用来定义类型，列举数据用的
// enum Xxx{
//   a = 10,
//   b = "200",
// }
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["paramsError"] = 400] = "paramsError";
    StatusCode[StatusCode["serverError"] = 500] = "serverError";
})(StatusCode || (StatusCode = {}));
let code = 400;
if (code === StatusCode.success) {
    console.log("成功");
}
else if (code === StatusCode.paramsError) {
    console.log("失败，请求参数问题");
}
else if (code === StatusCode.serverError) {
    console.log("失败，服务器问题");
}
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["success"] = 0] = "success";
    StatusCode2[StatusCode2["paramsError"] = 400] = "paramsError";
    StatusCode2[StatusCode2["serverError"] = 401] = "serverError"; // 401
})(StatusCode2 || (StatusCode2 = {}));
console.log(StatusCode2.success, StatusCode2.paramsError, StatusCode2.serverError);
