<template>
  <div class="home-service">
    <!-- 头部导航 -->
    <van-nav-bar
      class="nav-bar-header"
      left-arrow
      title=" 家庭服务"
    />
  </div>
</template>

<script>
export default {
  name: 'homeService',
  props: {},
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
.home-servce {
  ::v-deep .nav-bar-header {
    height: 180px;
    background-color: #3f51b5;
    .van-icon-arrow-left {
      color: #fff;
      font-size: 36px;
    }
    .van-nav-bar__title {
      color: #fff;
      font-size: 32px;
      margin-left: 72px;
      font-weight: 600;
    }
  }
}
</style>
