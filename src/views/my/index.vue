<template>
  <div class="my-container">
    <van-nav-bar left-text="我的" />
    <div class="userbox">
      <div
        class="not-login"
        @click="toLogin"
      >
        <div class="icon-img">
          <van-icon name="user-o" />
        </div>
        <span>点击登录</span>
      </div>
      <div class="nav-box">
        <van-grid :border='false'>
          <van-grid-item>
            <div
              slot="icon"
              class="icon-gerenziliao housekeeping"
            ></div>
            <span slot="text">个人资料</span>
          </van-grid-item>
          <van-grid-item>
            <div
              slot="icon"
              class="icon-fasfa-user1 housekeeping"
            ></div>
            <span slot="text">我的关注</span>
          </van-grid-item>
          <van-grid-item>
            <div
              slot="icon"
              class="icon-farfa-comment-dots housekeeping"
            ></div>
            <span slot="text">我的评价</span>
          </van-grid-item>
          <van-grid-item>
            <div
              slot="icon"
              class="icon-fa-fax housekeeping"
            ></div>
            <span slot="text">已联系家政员</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="cell">
      <van-cell-group>
        <van-cell
          title="找家政服务记录"
          is-link
        >
          <div
            slot="icon"
            class="icon-md-receipt housekeeping"
          ></div>
        </van-cell>
        <van-cell
          title="家政求职记录"
          is-link
        >
          <div
            slot="icon"
            class="icon-ziyuan1 housekeeping"
          ></div>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="usre-status">
        <van-cell
          title="身份认证通道"
          class="cell-buttom"
          is-link
        >
          <div
            slot="icon"
            class="icon-antFill-safety-certificate housekeeping"
          ></div>
        </van-cell>
        <van-cell
          title="关于我们"
          icon="location-o"
          is-link
          to="/about"
        >
          <div
            slot="icon"
            class="icon-fas_fa-info-circle_Copy housekeeping"
          ></div>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  background-color: #f8f8f8;
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  ::v-deep.van-nav-bar {
    background-color: #3f51b5;
    .van-nav-bar__text {
      color: #fff;
      font-size: 38px;
    }
  }
  .userbox {
    position: relative;
    height: 400px;
    background-color: #3f51b5;
    .not-login {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0;
        background-color: #fff;
        .van-icon {
          font-size: 100px;
        }
      }
      span {
        color: #fff;
        font-size: 30px;
      }
    }
    .nav-box {
      position: absolute;
      top: 80%;
      margin-left: 5%;
      width: 90%;
      span {
        font-size: 24px;
        color: #7b7777;
        margin-top: 10px;
      }
      .housekeeping {
        font-size: 40px;
      }
      ::v-deep.van-grid-item__content {
        padding: 30px 0;
      }
    }
  }
  .cell {
    margin-top: 100px;
    .usre-status {
      margin-top: 10px;
      .cell-buttom {
        border-bottom: 1px solid #eeecec;
      }
    }
    .housekeeping {
      font-size: 40px;
      margin-right: 10px;
    }
  }
}
</style>
