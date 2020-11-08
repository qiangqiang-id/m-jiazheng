<template>
  <div class="admin">
    <!-- 导航栏 -->
    <van-nav-bar
      left-text="授权与协议"
      left-arrow
    />
    <!-- 导航栏 -->
    <!-- 头像 -->
    <div class="box">
      <div class="box1">
        <van-image
          class="img"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="name">熊某人</span>
      </div>
      <!-- 头像 -->

      <!-- 中间部分 -->
      <div class="box2"></div>
      <!-- 中间部分 -->

      <!-- 底部 -->
      <div class="bottom">提交认证</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
::v-deep.admin {
  .van-nav-bar__text,
  .van-icon {
    color: #ffffff;
    // font-size: 32px;
  }
  background-color: #3f51b5;
  // height: 412px;
  width: 100%;
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .van-nav-bar {
    background-color: #3f51b5;
  }
  .nav {
    background-color: #3f51b5;
    border: none;
  }
  .box {
    display: flex;
    height: 350px;
    align-items: center;
    justify-content: center;

    .box1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }
    .img {
      width: 110px;
      height: 108px;
    }
    .name {
      color: #ffffff;
      font-size: 28px;
      padding: 8px 0 0 7px;
    }
  }
  .box2 {
    position: fixed;
    top: 400px;
    left: 35px;
    width: 684px;
    height: 800px;
    background-color: #ffffff;
    border-radius: 15px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    background-color: #3f51b5;
    height: 108px;
    width: 100%;
    text-align: center;
    line-height: 108px;
    font-size: 28px;
    color: #ffffff;
  }
}
</style>
