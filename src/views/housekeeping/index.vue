<template>
  <div class="housekeeping-container">
    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
        class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
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
      <template #title>
        <van-button plain
          round
          size="mini">朴素按钮</van-button>
      </template>
      <!-- /选择框 -->
    </van-cell>
    <div class="box">

    </div>

    <house-keeping-list></house-keeping-list>
  </div>
</template>

<script>

import HouseKeepingList from '../../components/housekeepingList'
export default {
  name: 'HousekeepingIndex',
  components: {
    HouseKeepingList
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.housekeeping-container {
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
    height: 183px;
    .van-button--default {
      font-size: 12px;
      padding: 20px;
      border: 1px solid #979191;
      color: #979191;
    }
  }
  .box {
    width: 100%;
    height: 20px;
    background-color: #f9f5f5;
  }
}
</style>
