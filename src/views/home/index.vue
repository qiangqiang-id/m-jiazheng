<template>
  <div class="home-container">
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
        class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe"
        :autoplay="3000"
        indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <!-- /轮播图 -->
    <!-- 服务模块 -->
    <div class="main">
      <van-grid :column-num="3"
        class="server">
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="入驻商务部" />
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="家政求职" />
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="找家庭服务" />
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="线上家政培训" />
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="线上家政保险" />
        <van-grid-item icon="photo-o"
          class="server-btn"
          text="合同" />
      </van-grid>
      <van-grid :column-num="4"
        class="type">
        <van-grid-item class="type-item"
          v-for="item in typeList"
          :key="item.id">
          <div slot="default"
            class="type-content">
            <div class="type-btn">
              <van-icon class="type-icon"
                name="smile-o"></van-icon>
            </div>
            <span class="type-text">{{item.text}}</span>
          </div>
        </van-grid-item>

      </van-grid>
    </div>
    <!-- /服务模块 -->
    <!-- 家政公司 -->
    <div class="conpany">

    </div>
    <!-- /家政公司 -->
    <!-- 家政人员 -->
    <div class="housekeeping"></div>
    <!-- /家政人员 -->

  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      typeList: []
    }
  },
  created () {
    this.getTypeList()
  },
  methods: {
    async getTypeList () {
      const data = await this.$axios.get('http://localhost:8080/type')
      console.log(data.data)
      this.typeList = data.data.type
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding-bottom: 200px;
  background-color: #f9f5f5;
  .banner {
    padding: 40px 30px;
    box-sizing: border-box;
    height: 360px;
    background-color: #3f51b5;
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 290px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  .main {
    background-color: #fff;
    ::v-deep .server {
      padding: 20px 16px;
      .server-btn {
        display: flex;
        justify-content: space-around;
        .van-grid-item__content {
          background-color: #eeecec;
          width: 212px;
          height: 174px;
          margin-bottom: 20px;
          border-radius: 10px;
        }
      }
    }
    ::v-deep .type {
      .type-item {
        border: 0;
        .van-grid-item__content {
          .van-grid-item__content::after {
            border-width: unset;
          }
          .type-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .type-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 110px;
              height: 100px;
              border-radius: 50%;
              background-color: #eeecec;
            }
            .type-text {
              margin-top: 20px;
              font-size: 25px;
            }
          }
        }
      }
    }
  }
}
::v-deep .van-grid-item__content::after {
  border-width: 0;
}
::v-deep .van-hairline--bottom::after {
  border-bottom-width: 0;
}
</style>
