<template>
  <div class="Company-info-container">
    <!-- 头部 -->
    <van-nav-bar class="nav-header"
                 @click-left="$router.back()">
      <van-icon name="arrow-left"
                slot="left"
                color="#fff"
                size="20px" />
      <span slot="left"
            class="header-text">家政平台</span>
    </van-nav-bar>
    <div class="header-box">
    </div>
    <!-- /头部 -->
    <!-- banner图 -->
    <div class="banner">
      <img class="banner-pic"
           src="//s1.ayibang.com/static/h5/6.1/css/img/bannerbm_7c57ace.jpg">
    </div>
    <!-- /banner图 -->
    <!-- 用户数量区域 -->
    <div class="user-total">
      <van-grid :column-num="2">
        <van-grid-item class="user-register">
          <span slot="text"
                class="total">1</span>
          <span slot="text"
                class="text">注册家政员数</span>
        </van-grid-item>
        <van-grid-item class="user-register">
          <span slot="text"
                class="total">1</span>
          <span slot="text"
                class="text">已认证客户数</span>
        </van-grid-item>
      </van-grid>
      <div class="follow">
        <van-button class="follow-btn"
                    type="info"
                    round>关注</van-button>
      </div>
    </div>
    <!-- /用户数量区域 -->
    <!-- 业务范围 -->
    <div class="business">
      <van-nav-bar>
        <span slot="left"
              class="business-text">业务范围</span>
      </van-nav-bar>
      <van-grid :column-num="4"
                class="type">
        <van-grid-item class="type-item"
                       v-for="item in businessList"
                       :key="item">
          <div slot="default"
               class="type-content">
            <div class="type-btn">
              <van-icon class="type-icon"
                        name="smile-o"></van-icon>
            </div>
            <span class="type-text">{{item}}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="share">分享</van-tabbar-item>

      <van-tabbar-item class="housekeeping icon-weixin">微信联系</van-tabbar-item>
      <van-tabbar-item class="housekeeping icon-fasfa-phoneCopy1">电话联系</van-tabbar-item>
    </van-tabbar>
    <!-- /标签栏 -->
    <!-- 公司资料 -->
    <div class="company-introduce">
      <van-tabs v-model="active1"
                class="tab">
        <van-tab title="公司资料">
          <van-cell>
            <span slot="title"
                  class="business-text">公司资质</span>
            <div slot="label"
                 class="company-pic">
              <div class="company-pic-item"></div>
              <div class="company-pic-item"></div>
              <div class="company-pic-item"></div>
            </div>
          </van-cell>
          <van-cell>
            <span slot="title"
                  class="business-text">基本资料</span>
            <div slot="label">
              <p>公司名称：</p>
              <p>法人代表：</p>
              <p>公司电话：</p>
              <p>公司规模：</p>
              <p>公司地址：</p>
            </div>
          </van-cell>
          <van-cell>
            <span slot="title"
                  class="business-text">公司介绍</span>
            <p slot="label">这是一个段落</p>
          </van-cell>
        </van-tab>
        <van-tab title="注册人员">
          <van-cell title="单元格"
                    value="内容"
                    label="描述信息" />
        </van-tab>
      </van-tabs>
    </div>
    <!-- /公司资料 -->
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
  data () {
    return {
      active: '',
      businessList: ['月嫂', '育婴师', '保姆']
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.Company-info-container {
  padding: 92px 0;
  background-color: #f8f8f8;
  .nav-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .header-box {
    width: 100%;
    height: 50px;
    background-color: #3f51b5;
  }
  .banner {
    margin: 0 auto;
    margin-top: -35px;
    width: 674px;
    height: 342px;
    background-color: pink;
    .banner-pic {
      width: 100%;
    }
  }
  .user-total {
    margin: 20px auto;
    width: 674px;
    background-color: #fff;
    .user-register {
      height: 200px;
      .van-grid-item__content::after {
        border-width: 0;
      }
      .total {
        color: #3f51b5;
      }
      .text {
        font-size: 30px;
      }
    }
    .follow {
      position: relative;
      padding-bottom: 30px;

      .follow-btn {
        display: block;
        margin: 0 auto;
        width: 152px;
        height: 50px;
      }
    }
    .follow::after {
      content: "";
      position: absolute;
      top: -120px;
      left: 50%;
      background-color: #e8e8e8;
      width: 2px;
      height: 60px;
    }
  }
  .business {
    width: 674px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
  }
  .icon-weixin::before,
  .icon-fasfa-phoneCopy1::before {
    font-size: 40px;
  }
}
::v-deep .type {
  .type-item {
    border: 0;
    .van-grid-item__content {
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
.business-text {
  margin-left: 20px;
  font-size: 25px;
}
.business-text::after {
  position: absolute;
  top: 30px;
  left: 25px;
  content: "";
  width: 8px;
  height: 30px;
  background-color: #3f51b5;
}
::v-deep .van-grid-item__content::after {
  border-width: 0 !important;
}
.company-introduce {
  width: 674px;
  margin: 20px auto;
  .company-pic {
    display: flex;
    justify-content: space-between;
    .company-pic-item {
      width: 190px;
      height: 148px;
      background-color: pink;
    }
  }
}
</style>
