
import request from './request'
import qs from 'qs';

// 登录返回token
export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.post('/admin/login', data);

// 获取当前登录用户信息
export const getAdminInfoApi = (): PromiseRes<AdminInfoRes> => request.get('/admin/info')

// 获取用户数据列表
export const getAdminLists = (data: AdminListParams): PromiseRes<{ list: {}[] }> => request.get('/admin/list', { params: data })

// 修改用户信息
export const updateAdmin = (id: number, data: AdminObjItf): PromiseRes => request.post('/admin/update/' + id, data)

// 获取所有角色
export const getRoleListAll = (): PromiseRes<RoleObjItf[]> => request.get('/role/listAll')

// 根据用户id获取角色
export const getAdminRoleById = (id: number): PromiseRes<RoleObjItf[]> => request.get('/admin/role/' + id)

// 分配用户角色
// export const updateAdminRole = (data: { adminId: number; roleIds: string }): PromiseRes => request.post('/admin/role/update', null, { params: data })

// form-data
export const updateAdminRole = (data: { adminId: number; roleIds: string }): PromiseRes => request.post('/admin/role/update', qs.stringify(data))

// 获取首页数据
export const getAdminStat = (): PromiseRes<IndexDataItf> => request.get('http://kumanxuan1.f3322.net:8360/admin/stat')