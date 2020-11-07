<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
                       to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search"
                       to="/company">家政公司</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to="/housekeeping">家政人员</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 375px;
  height: 100px;
  background-color: pink;
}
</style>
