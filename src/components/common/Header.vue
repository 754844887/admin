<template>
    <el-menu
            class="el-menu-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-submenu index="1">
          <template slot="title">admin</template>
          <el-menu-item index="1-1">用户中心</el-menu-item>
          <el-menu-item index="1-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
