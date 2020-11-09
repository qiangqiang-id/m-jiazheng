<template>
  <div class="identity">

    <!-- 导航栏 -->
    <van-nav-bar @click-left="$router.back()"
                 left-text="授权与协议"
                 left-arrow />
    <!-- 导航栏 -->
    <!-- 头像 -->
    <div class="box">
      <div class="box1">
        <van-image class="img"
                   round
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="name">{{list.status}}</span>
      </div>
    </div>
    <!-- 头像 -->

    <!-- 中间内容 -->
    <div class="box2"
         v-html="list.text">
    </div>
    <!-- 中间内容 -->

    <!-- 底部 -->
    <van-button class="bottom"
                block
                type="info"
                native-type="submit"
                :disabled="this.isdisabled">
      <van-radio-group v-model="radio"
                       class="radio">

        <van-radio name="1"
                   @click="isunfasten"></van-radio>

      </van-radio-group>

      我已阅读并同意以上协议
    </van-button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      radio: '0',
      list: {}, // 所有数据
      isdisabled: true

    }
  },
  created () {
    this.request()
  },
  methods: {
    async request () {
      const res = await this.$axios.get('http://localhost:8080/t')
      console.log(res.data)
      this.list = res.data
    },
    isunfasten () {
      this.isdisabled = !this.isdisabled
      if (this.isdisabled) {
        this.radio = '0'
      } else {
        this.radio = '1'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.identity {
  background-color: #3f51b5;
  // height: 412px;
  width: 100%;
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .van-nav-bar {
    background-color: #3f51b5;
    .van-nav-bar__text,
    .van-icon {
      color: #ffffff;
      // font-size: 32px;
    }
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
    top: 370px;
    left: 35px;
    width: 684px;
    height: 800px;
    background-color: #fcfcfc;
    border-radius: 15px;
    // box-shadow: 0 0 0.1px 0.1px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    background-color: #3f51b5;
    height: 108px;
    width: 100%;
    text-align: center;
    line-height: 108px;
    font-size: 34px;
    color: #ffffff;
  }
  .radio {
    position: absolute;
    left: 140px;
    top: 31px;
  }
  .p {
    font-size: 24px;
    text-indent: 2em;
    margin: 10px 30px;
  }
  .p1 {
    font-size: 24px;
    margin: 0px 30px;
  }
}
</style>
