<template>
  <div id="app">
    <navTop v-show="$route.meta.bcManage"></navTop>
    <router-view/>
    <nav-left v-show="$route.meta.bcManage"></nav-left>
  </div>
</template>

<script>

import NavTop from './components/Admin/NavTop/NavTop'
import NavLeft from './components/Admin/NavLeft/NavLeft'
export default {
    components :{
      NavTop,
      NavLeft
    }
}
</script>

<style>

</style>
