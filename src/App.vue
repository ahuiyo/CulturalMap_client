<template>
  <div id="app">
    <navTop></navTop>
    <router-view/>
    <nav-left></nav-left>
  </div>
</template>

<script>

import navTop from './components/admin/navTop/navTop'
import navLeft from './components/admin/navLeft/navLeft'
export default {
    components :{
      navTop,
      navLeft
    }

}
</script>

<style>

</style>
