import {
  RECEIVE_USERLIST,
  RECEIVE_SEARCH
} from "./mutation-types";

import {
  requser,
  reqsearchuser
} from "../api";

export default {
  //异步获取用户数据
  async getUserlist({commit}){
    //发送请求信息
    const result=await requser();
    if(result.code===0){
      const list = result.data;
      //提交至mutation
      commit(RECEIVE_USERLIST,{list})
    }
  },
  async getSearchUser({commit},code){
    const result= await reqsearchuser(code);
    if(result.code === 0){
      const list = result.data;
      //提交至mutation
      commit(RECEIVE_SEARCH,{list})
    }
  }
}
