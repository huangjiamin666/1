import request from './request'

interface AdminLoginData {
  password: string
  username: string
}

type PromiseRes<T> = Promise<ManageResult<T>>

interface ManageResult<T = {}> {
  code: number;
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

// 登录返回token
export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.post('/admin/login', data);

// 获取当前登录用户信息
export const getAdminInfoApi = (): PromiseRes<AdminInfoRes> => request.get('/admin/info')