<template>
  <div>
    <div class="contentRight">
      <div class="content_page">
        <div class="pages">
          <div class="pages_title">
            <button class="pages_title_but del" title="删除">
              <i class="iconfont icon-shanchu"></i>
              批量删除
            </button>
            <button class="pages_title_but add" title="添加" @click="addChangeModel">
              <i class="iconfont icon-tubiaozhizuomoban-"></i>
              添加
            </button>
            <div class="pages_title_search">
              <input class="search_input" v-model="searchcode"  placeholder="请输入用户名"/>
              <button class="search" title="搜索" @click="getsearch" @keyup.enter="getsearch" >
                <i class="iconfont icon-sousuo"></i>
              </button>
            </div>
            <div class="title_user">
                        <span class="user_icon" title="导出表格">
                                <i class="iconfont icon-daochu"></i>
                        </span>
              <span class="user_icon" title="打印">
                            <i class="iconfont icon-dayin_dayin"></i>
                        </span>
            </div>
          </div>
          <!--        遍历的用户数据-->
          <div class="pages_list">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th><input type="checkbox"></th>
                <th>头像</th>
                <th>姓名</th>
                <th>性别</th>
                <th>手机号</th>
                <th>所在城市</th>
                <th>备注</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(user,index) in userlist" :key="index">
                <td><input type="checkbox"></td>
                <td><img :src="'http://localhost:3000/'+user.avatar" alt="用户头像"></td>
                <td>{{user.username}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.city}}</td>
                <td>{{user.remarks}}</td>
                <td><i class="iconfont icon-chakan" title="查看" @click="lookChangeModel(index)"></i>
                  <i class="iconfont icon-bianji" title="编辑" @click="editChangeModel(index)"></i>
                  <i class="iconfont icon-shanchu" title="删除" @click="deluser(user._id)"></i>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <!--        分页-->
          <div class="pages_pagin">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--    模态框  添加与查看详情-->
    <div :class="!model?'add_modal':'add_modal tran_scale'">
      <form>
        <div class="modal_tit" v-if="modelStyle === 1">添加用户</div>
        <div class="modal_tit" v-if="modelStyle===2">查看用户信息</div>
        <div class="modal_tit" v-if="modelStyle===3">修改用户信息</div>
        <div class="modal_oper" @click="closeModel">
          <a href="javascript:;" class="oper_close"></a>
        </div>
        <div class="modal_con">
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>头像</span>
            </div>
            <div class="con_input_alike con_input_img">
              <div v-if="modelStyle!==2" @click.stop="clickImg" class="img_change">
                <p>更换头像</p>
              </div>
              <input name="avatar" type="file" accept="image/*" @change="oploadImg" style="display: none;" class="hiddenInput"/>
              <img :src="avatar" alt="用户头像"/>
            </div>
          </div>
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>姓名</span>
            </div>
            <input name="username" :disabled="modelStyle===2" v-model="username" class="con_input_r con_input_alike" type="text" placeholder="请输入姓名"/>
          </div>
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>性别</span>
            </div>
            <input name="gender" :disabled="modelStyle===2" v-model="gender" class="con_input_r con_input_alike" type="text" placeholder="请输入性别"/>
          </div>
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>手机号</span>
            </div>
            <input name="phone" :disabled="modelStyle===2" v-model="phone" class="con_input_r con_input_alike" type="text" placeholder="请输入手机号"/>
          </div>
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>所在城市</span>
            </div>
            <input name="city" :disabled="modelStyle===2" v-model="city" class="con_input_r con_input_alike" type="text" placeholder="请输入所在城市"/>
          </div>
          <div class="con_input">
            <div class="con_input_l con_input_alike">
              <span>备注</span>
            </div>
            <input name="remarks" :disabled="modelStyle===2"  v-model="remarks"  class="con_input_r con_input_alike" type="text" placeholder="请输入备注"/>
          </div>

        </div>
        <div class="modal_sub">
          <a v-if="modelStyle===1" @click="adduser" href="javascript:;"  class="sub_yes">提交</a>
          <a v-if="modelStyle===3" @click="edituser" href="javascript:;"  class="sub_yes">提交</a>
          <a @click="closeModel" class="sub_no">取消</a>
        </div>
      </form>
    </div>
    <div v-show="model" class="shadow" @click="closeModel"></div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    import {reqadduser,reqdeluser,reqedituser,reqsearchuser} from './../../../api'

    export default {
        data() {
            return {
                // userList: {}, //用户信息集合
                model: false, //模态框状态 false关闭  true打开
                modelStyle:1, // 1表示此次操作为添加  2表示为查看  3 编辑
                searchcode:'',//搜索值
                //添加的用户信息
                id:'',
                username:'',
                avatar:'',
                gender:'',
                phone:'',
                city:'',
                remarks:'',
                file:''
            }
        },
        mounted() {
            this.$store.dispatch('getUserlist')
        },
        computed : {
          ...mapState(['userlist'])
        },
        methods: {
            //搜索
            // async getsearch(){
            //     const name =this.searchcode;
            //     const result=await reqsearchuser(name);
            //     if(result.code === 0){
            //         alert(result.msg);
            //         this.userlist=result.data;
            //     }else{
            //         alert(result.msg)
            //     }
            // },
            getsearch(){
                this.$store.dispatch('getSearchUser',this.searchcode)
            },
            //获取用户信息
            // async getUser() {
            //     const result = await requser;
            //     console.log(result)
            //     this.userList = result;
            // },

            //上传图片  触发input
            clickImg:function(){
                this.$el.querySelector('.hiddenInput').click()
            },
            // 上传图片并显示在页面
            oploadImg:function(e){
                let $target = e.target || e.srcElement
                let file = $target.files[0];
                this.file = $target.files[0];
                var reader = new FileReader()
                reader.onload = (data) => {
                    let res = data.target || data.srcElement
                    this.avatar = res.result
                }
                reader.readAsDataURL(file)
            },
//上传添加用户
            async adduser(){
                const formdata =new FormData();
                formdata.append('username',this.username);
                formdata.append('gender',this.gender);
                formdata.append('phone',this.phone);
                formdata.append('city',this.city);
                formdata.append('remarks',this.remarks);
                formdata.append('avatar',this.file);
                const result = await reqadduser(formdata);
                console.log(result)
                if(result.code===0){
                    alert(result.data);
                    location.reload();
                }
            },
            //编辑用户上传  未解决 不修改头像时 报错
            async edituser(){
                const formdata =new FormData();
                formdata.append('id',this.id);
                formdata.append('username',this.username);
                formdata.append('gender',this.gender);
                formdata.append('phone',this.phone);
                formdata.append('city',this.city);
                formdata.append('remarks',this.remarks);
                formdata.append('avatar',this.file);
                if(this.file === ''){
                    formdata.append('avatarstate',0);
                }else{
                    formdata.append('avatarstate',1);
                }
                const result = await reqedituser(formdata);
                console.log(result);
                if(result.code===0){
                    alert(result.data);
                    location.reload();
                }
            },
            //删除用户
            async deluser(id){
                const result = await reqdeluser(id);
                console.log(result)
                if(result.code===0) {
                    alert(result.data);
                    location.reload();
                }
            },
            // 模态框事件变换  -- 查看
            lookChangeModel(index){
                this.modelStyle = 2;
                this.showUser(index);
                this.showModel()
            },
            // 模态框事件变换  -- 添加用户
            addChangeModel(){
                this.modelStyle=1;
                this.showModel()
            },
            // 模态框事件变换  -- 编辑用户
            editChangeModel(index){
                this.modelStyle=3;
                this.showUser(index);
                this.showModel()
            },
            //模态框显示某个用户
            showUser(index){
                this.username = this.userlist[index].username;
                this.avatar =  'http://localhost:3000/'+this.userlist[index].avatar;
                this.gender = this.userlist[index].gender;
                this.phone = this.userlist[index].phone;
                this.city = this.userlist[index].city;
                this.remarks = this.userlist[index].remarks;
                this.id = this.userlist[index]._id;
            },

            //打开模态框
            showModel() {
                this.model = true
            },
            //关闭添加模态框
            closeModel() {
                this.model = false
            },
        //    跳转函数
            goTo (path) {
                this.$router.replace(path)
            }
        },

    }
</script>

<style scoped>
  .contentRight {
    position: absolute;
    top: 45px;
    right: 0;
    /* bottom: 42px; */
    bottom: 0px;
    left: 220px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1;
    background-color: #F1F1F1;
  }

  .content_page {
    position: relative;
    margin: 0 auto;
    padding: 15px;
  }

  .pages {
    background-color: #fff;
  }

  .pages_title {
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0 15px;
    border-bottom: 1px solid #f6f6f6;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
    position: relative;
  }

  .pages_title_but {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    display: inline-block;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 15px;
  }

  .pages_title_search {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  .pages_title_search .search_input {
    height: 28px;
    line-height: 1.3;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #D2D2D2 !important;
    padding-left: 10px;
  }

  .pages_title_search .search_input:focus {
    outline: none;
    border: 1px solid #009688 !important;
  }

  .pages_title_search .search {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    color: #fff;
    background-color: #009688 !important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 5px;
  }

  .title_user {
    float: right;
  }

  .title_user .user_icon {
    text-align: center;
    line-height: 28px;
    display: inline-block;
    width: 30px;
    height: 28px;
    border: 1px solid #D2D2D2;
    margin-left: 10px;
    transition: all 0.5s;
  }

  .title_user .user_icon:hover {
    border-color: #999;
  }

  .pages .pages_list {
    margin: 15px;
  }

  .pages_list th, .pages_list td {
    font-size: 12px;
    color: #666;
  }

  .pages_list .table th, .pages_list .table td {
    padding: 0.65rem;
  }

  .table tr td img{
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  .pages .pages_pagin {
    margin: 15px;
    display: flex;
    justify-content: flex-end;
  }

  .pages_pagin .page-link {
    padding: 0.4rem 0.75rem !important;
  }

</style>
