<template>
  <div class="navLeft">
    <div class="navLeft_side">
      <ul class="side_list">
        <li><a href="javascript:;" class="active" @click="goTo('/usermanage')">用户管理</a></li>
        <li><a href="javascript:;" >个人信息</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        goTo (path) {
          this.$router.replace(path)
        }
      }
    }
</script>

<style scoped>
  /* 左侧侧边栏 */
  .navLeft{
    background: #1a1b20 !important;
    position: absolute;
    top: 45px;
    bottom: 0px;
    left: 0;
    z-index: 2;
    padding-top: 10px;
    width: 220px;
    max-width: 220px;
    overflow: hidden;
  }
  .navLeft .navLeft_side{
    width: 220px;
  }
  .navLeft .navLeft_side .side_list {
    width: 100%;
  }
  .side_list li a{
    font-size: 14px;
    padding: 10px 15px 10px 15px;
    display: block;
    cursor: pointer;
    border-left: 4px solid transparent;
    transition: all 0.3s;
    color: rgba(255, 255, 255, 0.74) !important;
  }
  .side_list li a:hover, .side_list li a.active {
    border-color: rgb(4, 86, 78) !important;
  }
  .side_list li a:hover, .side_list li a.active {
    color: rgb(255, 255, 255) !important;
  }
  .side_list li  a:hover, .side_list li a.active {
    background: rgb(0, 150, 136) !important;
  }
</style>
