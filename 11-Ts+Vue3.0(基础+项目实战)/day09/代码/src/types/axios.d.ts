
interface AdminLoginData {
  password: string
  username: string
}

type PromiseRes<T = {}> = Promise<ManageResult<T>>

interface ManageResult<T = {}> {
  code?: number;
  errno?: number;
  data: T;
  // message: string;
}
// 登录返回接口
interface AdminLoginRes {
  token: string;
  tokenHead: string;
}
// 当前用户信息
interface AdminInfoRes {
  menus: []
}
interface AdminListParams { keyword: string; pageNum: number; pageSize: number }