import ajax from './ajax'

const base_url = '/api';

export const requser = () => ajax(base_url+'/admin/usermanage'); //请求用户管理页面数据
export const reqadduser= (adduser) => ajax(base_url+'/admin/usermanage/adduser',adduser,'POST')
