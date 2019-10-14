<template>
  <div class="contentRight">
    <div class="content_page">
      <div class="pages">
        <div class="pages_title">
          <button class="pages_title_but del" title="删除">
            <i class="iconfont icon-shanchu"></i>
            批量删除
          </button>
          <button class="pages_title_but add" title="添加">
            <i class="iconfont icon-tubiaozhizuomoban-"></i>
            添加
          </button>
          <form class="pages_title_search">
            <input class="search_input" placeholder="请输入用户名" />
            <button class="search" title="搜索">
              <i class="iconfont icon-sousuo"></i>
            </button>
          </form>
          <div class="title_user">
                        <span  class="user_icon" title="导出表格">
                                <i class="iconfont icon-daochu"></i>
                        </span>
            <span class="user_icon" title="打印">
                            <i class="iconfont icon-dayin_dayin"></i>
                        </span>
          </div>
        </div>
        <div class="pages_list">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th><input type="checkbox"></th>
              <th>姓名</th>
              <th>性别</th>
              <th>手机号</th>
              <th>所在城市</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><input type="checkbox"></td>
              <td>张三</td>
              <td>男</td>
              <td>15902023232</td>
              <td>河南省新乡市</td>
              <td>无备注</td>
              <td><i class="iconfont icon-chakan" title="查看"></i>
                <i class="iconfont icon-bianji" title="编辑"></i>
                <i class="iconfont icon-shanchu" title="删除"></i>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox"></td>
              <td>张三</td>
              <td>男</td>
              <td>15902023232</td>
              <td>河南省新乡市</td>
              <td>无备注</td>
              <td>
                <i class="iconfont icon-chakan" title="查看"></i>
                <i class="iconfont icon-bianji" title="编辑"></i>
                <i class="iconfont icon-shanchu" title="删除"></i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
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
</template>

<script>
    export default {
        name: "usermanage"
    }
</script>

<style scoped>
  .contentRight{
    position: absolute;
    top: 45px;
    right: 0;
    /* bottom: 42px; */
    bottom: 0px;
    left: 220px;
    overflow: hidden;
    z-index: 1;
    background-color: #F1F1F1;
  }
  .content_page{
    position: relative;
    margin: 0 auto;
    padding: 15px;
  }
  .pages{
    background-color: #fff;
  }
  .pages_title{
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
  .pages_title_but{
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
  .pages_title_search{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .pages_title_search .search_input{
    height: 28px;
    line-height: 1.3;
    background-color: #fff;
    border-radius: 2px;
    border:1px solid #D2D2D2!important;
    padding-left: 10px;
  }
  .pages_title_search .search_input:focus{
    outline: none;
    border:1px solid #009688!important;
  }
  .pages_title_search .search{
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
  .title_user{
    float: right;
  }
  .title_user .user_icon{
    text-align: center;
    line-height: 28px;
    display: inline-block;
    width: 30px;
    height: 28px;
    border: 1px solid #D2D2D2;
    margin-left: 10px;
    transition: all 0.5s;
  }
  .title_user .user_icon:hover{
    border-color: #999;
  }
  .pages .pages_list{
    margin: 15px ;
  }
  .pages_list th,.pages_list td{
    font-size: 12px;
    color: #666;
  }
  .pages_list .table th,.pages_list .table td {
    padding: 0.65rem;
  }
  .pages .pages_pagin{
    margin: 15px;
    display: flex;
    justify-content:flex-end;
  }
  .pages_pagin .page-link {
    padding: 0.4rem 0.75rem !important;
  }
</style>
