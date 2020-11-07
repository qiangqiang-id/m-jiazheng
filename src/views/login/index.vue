<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar class="page-nav-bar"
                 title="登录">
      <van-icon slot="left"
                name="cross"
                @click="$router.push($route.query.redirect || '/my')"></van-icon>
    </van-nav-bar>
    <!-- 表单 -->
    <van-form @submit="onSubmit"
              ref="formRef">
      <van-field name="mobile"
                 placeholder="请输入手机号"
                 v-model="user.mobile"
                 :rules="formRules.mobile"
                 type="number"
                 maxlength="11">
        <i slot="left-icon"
           class="iconfont iconshouji"></i>
      </van-field>
      <van-field name="code"
                 placeholder="请输入验证码"
                 v-model="user.code"
                 :rules="formRules.code"
                 type="number"
                 maxlength="6">
        <i slot="left-icon"
           class="iconyanzhengma iconfont"></i>
        <template #button>
          <van-count-down :time="1000*60"
                          format="ss"
                          @finish='isShow=false'
                          v-if="isShow" />
          <van-button round
                      v-else
                      size="small"
                      type="default"
                      class="btn-small"
                      @click="onSendNum"
                      native-type="button">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-box-btn">
        <van-button block
                    type="info"
                    native-type="submit"
                    class="login-btn">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '请输入正确的手机格式' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6为数字' }
        ]
      },
      isShow: false
    }
  },
  methods: {
    onSendNum () {
      this.isShow = true
    },
    onSubmit () {}
  }
}
</script>

<style lang="scss" scoped>
.page-nav-bar {
  background-color: #3f51b5;
  ::v-deep.van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
.iconfont {
  font-size: 37px;
}
.btn-small {
  background-color: #ededed;
  font-size: 22px;
  width: 152px;
  height: 46px;
  line-height: 46px;
  color: #666;
}
.login-box-btn {
  padding: 53px 33px;
  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
.van-field {
  font-size: 26px;
}
</style>
