import ajax from './ajax'

const base_url = '/api';

export const requser = () => ajax(base_url+'/admin/usermanage'); //请求用户管理页面数据
export const reqadduser= (adduser) => ajax(base_url+'/admin/usermanage/adduser',adduser,'POST');
export const reqedituser = (edituser) => ajax(base_url+'admin/usermanage/edituser',edituser,'POST');
export const reqdeluser = (id) => ajax(base_url+'/admin/usermanage/deluser?id='+id); //请求用户管理页面数据
export const reqsearchuser = (name) => ajax(base_url+'/admin/usermanage/search?name='+name);
export const reqdelusers = (userlist) => ajax(base_url+'/admin/usermanage/delusers',userlist,'POST')
