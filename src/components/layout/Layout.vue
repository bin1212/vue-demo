<template>
    <el-container style="height:100%">
        <el-aside height='100%' width='180px' style="background-color: rgb(238, 241, 246);height:100%">
          <el-menu
            class="layout-menu"
          >
            <el-submenu index='1'>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background-color: rgb(238, 241, 200)">12</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        
    </el-container>
</template>
<script>
import {initPage} from '../../untils/authControl'
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  created(){
    console.log(this.$router.options)
  }
}
</script>
<style>
.el-menu {
  width:100%
}
.layout-menu{
  display: inline-block;
  text-align: left;
}
</style>
