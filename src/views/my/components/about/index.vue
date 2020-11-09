<template>
  <div class="about-index">
    <van-nav-bar
      class="nav-bar"
      @click-left="$router.back()"
    >
      <div
        slot="left"
        class="nav-bar-left"
      >
        <span class="icon-mb-mobile-back  housekeeping"></span>
        <span class="nav-bar-text">关于我们</span>
      </div>
    </van-nav-bar>
    <!--  湖南家政平台 -->
    <div class="center-text ">
      湖南家政平台
    </div>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>
        <img src="@/assets/image/my_housekeeping1.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/my_housekeeping2.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/my_housekeeping3.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/my_housekeeping4.jpg">
      </van-swipe-item>
    </van-swipe>
    <!-- /轮播图 -->
    <div class="main-text">
      <!-- 介绍内容 -->
      <div class="introduce-text">
        湖南家政平台是由新湖南客户端、湖南征信公司、兴业银行长沙分行、中国人寿湖南分公司共同建设的一个集微信、H5手机端、电脑PC端、APP四网合一的人工智能家庭服务家政平台，帮助家服企业通过家政平台实现在线推广服务，在线签合同，子凹陷支付，家服人员档案管理、家服人员派单管理等服务，从而提高工作效率与服务质量的家政服务平台。
      </div>
      <!-- /介绍内容 -->
      <!-- 公司地址 -->
      <div class="address-text">
        <span>联系电话：15236985241</span>
        <span>
          联系地址：湖南省长沙市天心区暮云工业园凯覆漫城烛照小区4栋1311房
        </span>
      </div>
      <!-- /公司地址 -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutIndex'
}
</script>

<style lang="scss" scoped>
.about-index {
  .nav-bar {
    height: 128px;
    background-color: rgba(63, 81, 181, 100);
    .nav-bar-left {
      color: rgba(255, 255, 255, 100);
      font-size: 32px;
      font-weight: 700;
      .nav-bar-text {
        padding-left: 10px;
      }
    }
  }
  .center-text {
    height: 120px;
    // background-color: pink;
    text-align: center;
    line-height: 120px;
    color: rgba(16, 16, 16, 100);
    font-size: 32px;
    font-weight: 700;
  }
  .my-swipe {
    height: 330px;
    background-color: #e8e8e8;
    margin: 0px 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main-text {
    margin: 40px 30px 0px;

    .introduce-text {
      height: 262px;
      color: rgba(16, 16, 16, 100);
      font-size: 24px;
      font-weight: 700px;
    }
    .address-text {
      margin-top: 60px;
      height: 128px;
      color: rgba(0, 0, 0, 1);
      font-size: 24px;
      font-weight: 700px;
      span {
        display: block;
      }
    }
  }
}
</style>
