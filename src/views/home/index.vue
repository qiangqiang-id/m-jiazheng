<template>
  <div class="home-container"
       ref="home-Height">
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
            class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="my-swipe"
                        v-for="(image, index) in bannerPicList"
                        :key="index">
          <img class="banner-pic"
               v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

    </div>
    <!-- /轮播图 -->
    <!-- 服务模块 -->
    <div class="main">
      <van-grid :column-num="3"
                class="server">
        <van-grid-item class="server-btn"
                       text="入驻商务部"
                       @click="$router.push('/home/business')" />
        <van-grid-item class="server-btn"
                       text="家政求职"
                       @click="$router.push('/home/domestic')" />
        <van-grid-item class="server-btn"
                       text="找家庭服务"
                       to="/look" />

      </van-grid>
      <van-grid :column-num="4"
                class="type">
        <van-grid-item class="type-item"
                       v-for="item in typeList"
                       :key="item.id"
                       @click="$router.push('/housekeeping')">
          <div slot="default"
               class="type-content">
            <div class="type-btn">
              <img class="type-pic"
                   :src="item.pic">
            </div>
            <span class="type-text">{{item.text}}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- /服务模块 -->
    <van-loading type="spinner"
                 class="loading"
                 v-show="isLoading"
                 size="35px" />
    <!-- 家政公司 -->
    <div class="conpany">
      <van-nav-bar>
        <i slot="left"
           class="housekeeping icon-fasfa-home"></i>
        <span slot="left">
          湖南征信认证家服公司
        </span>
      </van-nav-bar>
      <company-list v-for="item in companyInfo"
                    :key="item.id"
                    :value="item"></company-list>
      <van-nav-bar class="more">
        <span slot="title"
              class="more-text"
              @click="getCompany">更多公司</span>
        <van-icon slot="title"
                  class="more-icon"
                  name="arrow" />
      </van-nav-bar>
    </div>
    <!-- /家政公司 -->
    <!-- 家政人员 -->
    <div class="housekeepings">
      <van-nav-bar>
        <i slot="left"
           class="housekeeping icon-fasfa-user"></i>
        <span slot="left">
          诚信注册家服员
        </span>
      </van-nav-bar>
      <housekeeping-list v-for="item in housekeepingInfo "
                         :key="item.id"
                         :value="item"></housekeeping-list>
      <van-nav-bar class="more">
        <span slot="title"
              class="more-text"
              @click="getHousekeepingInfo">更多家服员</span>
        <van-icon slot="title"
                  class="more-icon"
                  name="arrow" />
      </van-nav-bar>
    </div>
    <!-- /家政人员 -->

  </div>
</template>

<script>
import CompanyList from '@/components/companyList.vue'
import HousekeepingList from '@/components/housekeepingList.vue'
import { debounce } from 'lodash'
export default {

  name: 'HomeIndex',
  components: {
    CompanyList,
    HousekeepingList
  },
  data () {
    return {
      typeList: [],
      bannerPicList: [],
      housekeepingInfo: [],
      companyInfo: [],
      isLoading: false
    }
  },
  created () {
    this.getTypeList()
    this.getBannerPic()
    this.getHousekeepingInfo()
    this.getCompany()
  },
  mounted () {
    const homeHeight = this.$refs['home-Height']
    homeHeight.onscroll = debounce(() => {
      this.scrollTop = homeHeight.scrollTop
    }, 50)
  },
  // 从缓存状态被激活时触发的钩子函数
  activated () {
    this.$refs['home-Height'].scrollTop = this.scrollTop
  },
  methods: {
    async getTypeList () {
      try {
        const data = await this.$axios.get('http://localhost:8080/type')
        this.typeList = data.data.type
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    async getBannerPic () {
      try {
        const data = await this.$axios.get('http://localhost:8080/banner')
        this.bannerPicList = data.data.data
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    async getCompany () {
      this.isLoading = true
      try {
        const data = await this.$axios.get('http://localhost:8080/homeCompanyInfo')
        this.companyInfo.push(...data.data.data)
      } catch (err) {
        this.$toast('获取数据失败')
      }
      this.isLoading = false
    },
    async getHousekeepingInfo () {
      this.isLoading = true
      try {
        const data = await this.$axios.get('http://localhost:8080/homeHousekeepingInfo')
        const results = data.data.data
        this.housekeepingInfo.push(...results)
      } catch (err) {
        this.$toast('获取信息失败')
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: 92px;
  .nav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  margin-bottom: 130px;
  background-color: #f9f5f5;
  .loading {
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner {
    padding: 40px 30px;
    box-sizing: border-box;
    height: 360px;
    width: 100%;
    background-color: #3f51b5;
    .my-swipe {
      width: 100%;
      color: #fff;
      font-size: 20px;
      height: 290px;
      text-align: center;
      background-color: #39a9ed;
      .banner-pic {
        width: 100%;
      }
    }
  }
  .main {
    background-color: #fff;
    ::v-deep .server {
      padding: 20px 16px;
      .server-btn {
        display: flex;
        justify-content: space-around;
        .van-grid-item__text {
          color: #fff;
          font-size: 30px;
        }
        .van-grid-item__content {
          background: linear-gradient(blue, pink);
        }
        .server-pic {
          width: 100%;
        }
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
              overflow: hidden;
              .type-pic {
                width: 100%;
                border-radius: 50%;
              }
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
  .conpany {
    position: relative;
    margin-top: 20px;
    .housekeeping {
      font-size: 30px;
      margin-right: 10px;
    }
    .more {
      position: absolute;
      bottom: -30px;
      left: 0;
      right: 0;
      .more-icon,
      .more-text {
        vertical-align: middle;
        font-size: 25px;
        color: #878684;
      }
    }
  }
  .housekeepings {
    position: relative;
    margin-top: 50px;
    .housekeeping {
      font-size: 30px;
      margin-right: 10px;
    }
  }
  .more {
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    .more-icon,
    .more-text {
      vertical-align: middle;
      font-size: 25px;
      color: #878684;
    }
  }
}
::v-deep .van-grid-item__content::after {
  border-width: 0;
}
::v-deep .van-hairline--bottom::after {
  border-bottom-width: 0;
}
.banner-pic {
  width: 100%;
  height: 100%;
}
.amap-demo {
  height: 300px;
}
</style>
