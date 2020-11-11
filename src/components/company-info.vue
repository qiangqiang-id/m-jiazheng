import { mapState } from 'vuex';
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
    <div class="box"
         ref="company-info-ref">
      <!-- banner图 -->
      <div class="banner">
        <img class="banner-pic"
             :src="infoList.banner">
      </div>
      <!-- /banner图 -->
      <!-- 用户数量区域 -->
      <div class="user-total">
        <van-grid :column-num="2">
          <van-grid-item class="user-register">
            <span slot="text"
                  class="total">{{infoList.num1}}</span>
            <span slot="text"
                  class="text">注册家政员数</span>
          </van-grid-item>
          <van-grid-item class="user-register">
            <span slot="text"
                  class="total">{{infoList.num2}}</span>
            <span slot="text"
                  class="text">已认证客户数</span>
          </van-grid-item>
        </van-grid>
        <div class="follow">
          <van-button @click="editIsFollow"
                      :loading="isLoading"
                      class="follow-btn"
                      :type="infoList.is_follow ? 'info' : 'default'"
                      round>{{infoList.is_follow ? '关注' : '已关注'}}</van-button>
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
                         v-for="item in infoList.business"
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
      <!-- 公司资料 -->
      <div class="company-introduce">
        <van-tabs v-model="active2"
                  class="tab">
          <van-tab title="公司资料">
            <van-cell v-for="(item,index) in infoList.compang_pic"
                      :key="index">
              <span slot="title"
                    class="business-text">{{item.name}}</span>
              <div slot="label"
                   class="company-pic">
                <div class="company-pic-item"
                     v-for="(value,index) in item.picPath"
                     :key="index">
                  <img :src="value" />
                </div>
              </div>
            </van-cell>
            <van-cell>
              <span slot="title"
                    class="business-text">基本资料</span>
              <div slot="label">
                <p>公司名称：{{company.name}}</p>
                <p>法人代表：{{infoList.representative}}</p>
                <p>公司电话：{{infoList.mobile}}</p>
                <p>公司规模：{{infoList.scale}}</p>
                <p>公司地址：{{company.address}}</p>
              </div>
            </van-cell>
            <van-cell>
              <span slot="title"
                    class="business-text">公司介绍</span>
              <p slot="label"> {{infoList.intorduce}}</p>
            </van-cell>
          </van-tab>
          <van-tab title="注册人员">
            <van-cell title="单元格"
                      value="内容"
                      label="描述信息" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- /公司资料 -->
    <!-- 标签栏 -->
    <van-tabbar v-model="active1"
                active-color="#7d7e80">
      <van-tabbar-item icon="share"
                       @click="isShowShare =true">分享</van-tabbar-item>
      <van-share-sheet v-model="isShowShare"
                       title="立即分享给好友"
                       :options="options"
                       @select="onSelect"
                       @cancel="isShowShare = false" />

      <van-tabbar-item class="housekeeping icon-weixin"
                       @click="showMobilePopup('微信')">微信联系</van-tabbar-item>
      <van-tabbar-item class="housekeeping icon-fasfa-phoneCopy1"
                       @click="showMobilePopup('电话')">电话联系</van-tabbar-item>
    </van-tabbar>
    <!-- /标签栏 -->

    <!-- 电话联系弹出框 -->
    <van-popup v-model="isShowMobile"
               class="mobile-popup"
               position="bottom"
               :style="{ height: '35%' }">
      <van-picker item-height="20px"
                  show-toolbar
                  class="mobile-picker"
                  :columns="columns">
        <span slot="title">{{mode}}</span>
      </van-picker>
      <div class="mobile-cancel-btn"
           @click="isShowMobile=false">取消</div>
    </van-popup>
    <!-- /电话联系弹出框 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CompanyInfo',
  data () {
    return {
      active1: '',
      active2: 0,
      infoList: {},
      isLoading: false,
      // 分享
      isShowShare: false,
      // 联系电话框
      isShowMobile: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ],
      columns: ['1334454545'],
      mode: ''
    }
  },
  created () {
    this.getCompanyInfo()
  },
  mounted () {
    this.$refs['company-info-ref'].scrollTop = 0
  },
  computed: {
    ...mapState(['company'])
  },
  methods: {
    async getCompanyInfo () {
      try {
        const data = await this.$axios.get('http://localhost:8080/test')
        console.log(data.data)
        this.infoList = data.data
      } catch (err) {
        this.$toast('获取信息失败')
      }
    },
    async editIsFollow () {
      this.isLoading = true
      try {
        await this.$axios.put('http://localhost:8080/is_follow', { is_follow: !this.infoList.is_follow })
        this.infoList.is_follow = !this.infoList.is_follow
      } catch (err) {
        this.$toast('操作失败，请重试')
      }
      this.isLoading = false
    },
    onSelect (option) {
      this.$toast(option.name)
      this.showShare = false
    },
    showMobilePopup (value) {
      this.isShowMobile = true
      this.mode = value
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.Company-info-container {
  .box {
    position: fixed;
    top: 86px;
    bottom: 50px;
    right: 0;
    left: 0;
    overflow: auto;
  }
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
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.mobile-popup {
  box-sizing: border-box;

  padding: 0 20px;
  background: rgba(0, 0, 0, 0.2);
  // opacity: 0.2;
  ::v-deep .van-picker-column__item {
  }
  .mobile-cancel-btn {
    margin-top: 20px;
    text-align: center;
    line-height: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 20px;
  }
}
::v-deep.mobile-picker {
  border-radius: 20px;
  overflow: hidden;
}
::v-deep .van-picker__confirm,
::v-deep .van-picker__cancel {
  visibility: hidden;
}
</style>
