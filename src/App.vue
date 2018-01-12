<template>
  <div id="app">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>注意!</strong> 防守嚴謹模式啟動中.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- vue logo -->
    <img src="./assets/logo.png" id="logo" class="mt-5">
    <nav class="mb-5">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/down" class="nav-link">連結二</router-link>
        </li>
      </ul>
    </nav> 

    <!-- 路由匹配到的组件將會渲染在這 -->
    <router-view/>
    <SiteFooter></SiteFooter>
  </div>
</template>
<script>
import SiteFooter from '@/components/SiteFooter'
export default {
  name: 'app',
  components: {
    SiteFooter
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  padding-bottom: 60px;
  position: relative;
}
#logo{
  max-width: 60px;
}
</style>
