<template>
  <div class="navTop">
    <div class="logo">
      <a href="">CulturalMap</a>
    </div>
    <ul class="adminMass right">

      <li class="adminMass_Item">admin</li>
      <li class="adminMass_Item">前台首页</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "navTop"
    }
</script>

<style scoped>
  .navTop{
    background: #1a1b20 !important;
    width: 100%;
    height: 45px;
  }
  .navTop .logo a{
    color: rgb(255, 255, 255) !important;
    float: left;
    font-size: 18px;
    padding-left: 20px;
    line-height: 45px;
    width: 200px;
  }
  .adminMass{
    position: relative;
    padding: 0 20px;
    background-color: rgba(0,0,0,0);
    color: #fff;
    border-radius: 2px;
    font-size: 0;
    box-sizing: border-box;
  }
  .adminMass_Item{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 45px;
    font-size: 12px;
    padding: 0px 20px;
  }

</style>
