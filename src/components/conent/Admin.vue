<template>
  <el-container class="home-container">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="logo" :style="{ paddingLeft: pl + 'px'}">
        <p><img src="~assets/img/logo-dark.png" alt=""></p>
      </div>

      <!-- 左侧导航栏开始-->
      <el-aside width="200px">
        <!-- 导航栏开始 -->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      </el-aside>
      <!--左侧导航栏结束-->
    <el-container>

      <!-- 头部导航栏开始   -->
      <el-header>
        <div class="toggle">
          <i class="el-icon-s-fold" @click="toggleClick"></i>
        </div>
      </el-header>
      <!-- 头部导航栏结束   -->

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Admin",
    data(){
      return {
        isCollapse: false,
        pl: 20
      }
    },
    components: {},
    methods: {
      toggleClick(){
        this.isCollapse = !this.isCollapse
        if(this.isCollapse){
          this.pl = 10
        }else{
          this.pl = 20
        }
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #ffffff;
  }

  .el-aside {
    background-color: #545c64;
  }

  .el-main {
    background-color: #ff5777;
  }

  .home-container {
    height: 100vh;
  }

  .logo{
    height: 60px;

  }

  .logo img{
    width: 48px;
    height: 48px;
  }

  .toggle{
    font-size: x-large;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align:center;
  }


</style>
