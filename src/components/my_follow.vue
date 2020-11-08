<template>
  <div class="my-follow-container">
    <!-- 顶部导航 -->
    <div class="nav-head">
      <van-nav-bar left-text="我的关注"
                   left-arrow
                   @click-left="onClickLeft"
                   :border='false'>
      </van-nav-bar>
      <!-- 底部按钮 -->
      <van-tabs v-model="active">
        <van-tab title="家服公司">内容 1</van-tab>
        <van-tab title="家服人员">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      active: 1
    }
  },
  created () {},

  computed: {},

  methods: {
    // 返回按钮
    onClickLeft () {

    }

  },

  mounted () {},

  watch: {}

}

</script>

<style lang="scss" scoped>
.my-follow-container {
  .nav-head {
    height: 192px;
    background-color: #3f51b5;
    .van-nav-bar {
      background-color: #3f51b5;
    }
    ::v-deep .van-nav-bar__text {
      color: #fff;
      font-weight: 600;
      font-size: 32px;
    }
    ::v-deep .van-icon {
      color: #fff;
    }
    ::v-deep .van-tabs__nav {
      background-color: #3f51b5;
      .van-tab__text {
        color: #fff;
        font-size: 28px;
      }
      .van-tabs__line {
        background-color: #fff;
      }
    }
  }
}
</style>
