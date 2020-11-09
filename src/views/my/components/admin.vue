<template>
  <div class="admin">
    <!-- 导航栏 -->
    <van-nav-bar @click-left="$router.push('/my')"
                 left-text="授权与协议"
                 left-arrow />
    <!-- /导航栏 -->
    <!-- 头像 -->
    <div class="box">
      <div class="box1">
        <van-image class="img"
                   round
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="name">熊某人</span>
      </div>
      <!-- /头像 -->

      <!-- 中间部分 -->

      <div class="box2">
        <!-- 标题 -->
        <div class="title-box">
          <div class="icon"></div>
          <div class="title">
            请输入您的用户名和密码进行认证
          </div>
        </div>
        <!-- /标题 -->

        <!-- 表单 -->
        <van-form @submit="onSubmit">
          <van-field clearable
                     v-model="user.username"
                     label="用户账户 :"
                     required
                     :rules="yonghu.username"
                     maxlength="11"
                     type="Number" />
          <van-field v-model="user.password"
                     type="password"
                     label="用户密码 :"
                     required
                     :rules="yonghu.password"
                     maxlength="6" />
        </van-form>
        <!-- /表单 -->
      </div>
      <!-- /中间部分 -->

      <!-- 底部 -->
      <van-button class="bottom"
                  block
                  type="info"
                  native-type="submit">
        提交认证
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      yonghu: {
        username: [{
          required: true,
          message: '账户名不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '账户格式错误'
        }],
        password: [{
          required: true,
          message: '账户密码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '密码格式错误'
        }]
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }

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
    left: 33px;
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

  .title {
    font-size: 28px;
    background-color: #fff;
    height: 80px;
    line-height: 80px;
    border-radius: 10px 10px 0 0;
    padding-left: 40px;
  }

  .icon {
    position: absolute;
    left: 22px;
    top: 25px;
    width: 8px;
    height: 28px;
    background-color: #3f51b5;
  }

  .van-cell {
    // background-color: #f0eeee;
    border-bottom: 1px solid #f0eeee;
    // background-color: rgb(177, 177, 177);
    .van-cell__title {
      color: #000;
    }
  }

  .van-cell::after {
    border: 0;
  }

  .title-box {
    border-bottom: 1px solid #f0eeee;
  }
  .van-icon {
    color: #cfcfcf;
  }
}
</style>
