<template>
  <div class="housekeeping-container">
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
            class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
    <div class="elevator">
      <!-- 导航栏 -->
      <city-inquire @content-show='show=true'></city-inquire>
      <!-- /导航栏 -->

      <!-- 选择框 -->
      <van-cell class="attribute-tag">
        <!-- 使用 title 插槽来自定义标题 -->
        <div slot="title"
             class="btn-box"
             v-for="(item,index) in occupation"
             :key="index">
          <van-button plain
                      round
                      size="mini">{{item}}</van-button>
        </div>

        <!-- /选择框 -->
      </van-cell>

      <div class="box">

      </div>

      <house-keeping-list v-for=" item in infoList"
                          :key="item.id"
                          :value='item'>
      </house-keeping-list>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show"
               position="bottom"
               :style="{height:'85%'}">
      <matching></matching>
    </van-popup>
  </div>
</template>

<script>

import HouseKeepingList from '@/components/housekeepingList'
import CityInquire from '@/components/CityInquire '
import matching from '@/components/matching'
export default {
  name: 'HousekeepingIndex',
  data () {
    return {
      value: '',
      // 家服人员信息
      infoList: [], // 职业
      occupation: [],
      show: false
    }
  },
  props: {},
  created () {
    this.getInformation()
  },

  computed: {},
  components: {
    HouseKeepingList, CityInquire, matching
  },
  methods: {
    // 返回按钮
    onClickLeft () {

    },
    // 获取家政人员基本信息
    async getInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/data|get')

      // console.log('getInformation -> res', res)
      if (res.status === 200) {
        // this.$toast.success('获取信息成功')
        // this.infoList.push(res.datas)
        this.infoList = res.datas
        // console.log(this.infoList)
        this.occupation = this.infoList[0].profession
        // console.log(this.occupation)
        this.occupation.push('全部职业')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.housekeeping-container {
  height: 100%;
  .nav-header {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .attribute-tag {
    padding: 26px;
    // height: 183px;
    .van-cell__title {
      // display: flex;
      // flex-wrap: wrap;
      width: 100%;
      .btn-box {
        display: inline;
      }
    }
    .all {
      display: inline;
    }
    .van-button--default {
      font-size: 12px;
      padding: 20px;
      border: 1px solid #979191;
      color: #979191;
      margin: 10px 20px;
      &:hover {
        border: 1px solid #3f51b5;
        color: #3f51b5;
      }
    }
  }
  .box {
    width: 100%;
    height: 20px;
    background-color: #f9f5f5;
  }
  .elevator {
    width: 100%;
    position: fixed;
    top: 92px;
    bottom: 100px;
    overflow: auto;
  }
}
</style>
