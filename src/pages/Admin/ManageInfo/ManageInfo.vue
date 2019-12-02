<template>
<div class="contentRight">
  <h2 class="user">这里是管理员信息管理页面</h2>
</div>
</template>

<script>
    export default {
        name: "ManageInfo"
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
  .user{
    color: red;
  }
</style>
