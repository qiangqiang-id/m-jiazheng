<template>
  <div class="layout-container">

    <!--
            <van-nav-bar
            class="nav-header">
      <span slot="left"
            class="header-text">家政平台</span>
      </van-nav-bar> -->
    <transition :name="direction">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <van-tabbar route>
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
      // active: 0
      direction: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 如果前端页面进行刷新，则无需加入transition动画
    if (from.name === null) {
      return
    }
    if (to.meta.index < from.meta.index) {
      this.direction = 'slide-right'
    } else {
      if (!to.meta.index) {
        this.direction = ''
        return
      }
      this.direction = 'slide-left'
    }
    next()
  }
}
</script>
<style lang="scss" scoped>
.layout-container {
  .van-tabbar {
    width: 100%;
    max-width: 100%;
    z-index: 999;
  }
}
.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 5s;
  will-change: transform;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-active,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter-to,
.slide-right-leave {
  transform: translateX(0);
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active,
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter-to,
.slide-left-leave {
  transform: translateX(0);
}
</style>
