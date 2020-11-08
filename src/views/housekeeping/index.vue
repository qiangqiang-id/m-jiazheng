<template>
  <div class="housekeeping-container">
    <!-- <myFollow></myFollow> -->
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
            class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
    <!--
            导航栏
            -->
    <van-search v-model="value"
                class="inputs"
                :clearable='true'
                show-action
                placeholder="请输入搜索关键词">
      <template #action>
        <div class="city">长沙</div>
      </template>
    </van-search>
    <!-- /导航栏 -->

    <!-- 选择框 -->
    <van-cell class="attribute-tag">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <van-button plain
                    round
                    size="mini">朴素按钮</van-button>
      </template>
      <!-- /选择框 -->
    </van-cell>
    <div class="box">
      <div class="elevator">
        <!-- 导航栏 -->
        <van-search v-model="value"
                    class="inputs"
                    :clearable='true'
                    show-action
                    placeholder="智能匹配">
          <template #action>
            <div class="city">长沙<i class="housekeeping icon-jiantou-down"></i></div>
          </template>
        </van-search>
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

        <house-keeping-list></house-keeping-list>
      </div>

    </div>
</template>

<script>

// import myFollow from '@/components/my_follow'
import HouseKeepingList from '../../components/housekeepingList'
export default {
  name: 'HousekeepingIndex',
  components: {
    HouseKeepingList
  },
  data () {
    return {
      value: '',
      // 职业
      occupation: [],
      // 家服人员信息
      infoList: []
    }
  },
  props: {},
  created () {
    this.getInformation()
  },

  computed: {},

  methods: {
    // 返回按钮
    onClickLeft () {

    },
    // 获取家政人员基本信息
    async getInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/data|get')

      console.log('getInformation -> res', res)
      if (res.status === 200) {
        this.$toast.success('获取信息成功')
        // this.infoList.push(res.datas)
        this.infoList = res.datas
        // console.log(this.infoList)
        this.occupation = this.infoList[0].profession
        console.log(this.occupation)
        this.occupation.push('全部职业')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.housekeeping-container {
  .nav-header {
    width: 100%;
    position: fixed;
    top: 0;
  }
  height: 100%;
  .inputs {
    border-top: 1px solid rgb(98, 114, 194);
    background-color: #3f51b5;
    .city {
      color: #fff;
    }
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
