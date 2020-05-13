<template>
    <el-container style="height:100%">
        <el-aside height='100%' width="100px" style="background-color: rgb(238, 241, 246);height:100%"></el-aside>
        <el-container>
            <el-header style="background-color: rgb(238, 241, 200)">12</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        
    </el-container>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  created(){
    console.log(this.$router)
  }
}
</script>
<style lang = "sass" scoped>

</style>
