<template>
  <div class="home-container">
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
            class="header-text">家政平台</span>
      <span class="header-text">家政平台</span>
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
        <!-- <van-grid-item class="server-btn"
                       v-for="(item,index) in serverPic"
                       :key="index">
          <img class="server-pic"
               :src="item">
        </van-grid-item> -->
        <van-grid-item icon="photo-o"
                       class="server-btn"
                       text="入驻商务部"
                       @click="$router.push('/home/business')" />
        <van-grid-item icon="photo-o"
                       class="server-btn"
                       text="家政求职"
                       @click="$router.push('/home/domestic')" />
        <van-grid-item icon="photo-o"
                       class="server-btn"
                       text="找家庭服务"
                       to="/look" />
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
    <!-- 家政公司 -->
    <div class="conpany">
      <van-nav-bar>
        <i slot="left"
           class="housekeeping icon-fasfa-home"></i>
        <span slot="left">
          湖南征信认证家服公司
        </span>
      </van-nav-bar>
      <company-list @click="$router.push('/companyInfo')"></company-list>
      <van-nav-bar class="more">
        <span slot="title"
              class="more-text">更多公司</span>
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
      <housekeeping-list></housekeeping-list>
      <van-nav-bar class="more">
        <span slot="title"
              class="more-text">更多家服员</span>
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
export default {
  name: 'HomeIndex',
  components: {
    CompanyList,
    HousekeepingList
  },
  data () {
    return {
      serverPic: ['//s1.ayibang.com/static/h5/6.1/css/img/hdb/banner_05d6a2b.png', '//s1.ayibang.com/static/h5/6.1/css/img/gdstimg1_b41f803.png', '//s1.ayibang.com/static/h5/6.1/css/img/img1_99f039a.png', '//s1.ayibang.com/static/h5/6.1/css/img/dbdlimg2_8bf257f.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/yes8_e7641e5.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/djaz/img1_cdbf2f1.png'],
      typeList: [],
      bannerPicList: []
    }
  },
  created () {
    this.getTypeList()
    this.getBannerPic()
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
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding-bottom: 130px;
  background-color: #f9f5f5;
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
</style>
