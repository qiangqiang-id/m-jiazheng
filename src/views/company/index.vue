<template>
  <div class="company-container">

    <!-- 头部 -->
    <van-nav-bar class="nav-header">
      <span slot="left"
        class="header-text">家政平台</span>
    </van-nav-bar>
    <!-- /头部 -->
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
          v-for="(items,index) in cycleButton"
          :key="index">
          <van-button plain
            class="Page-bnt-box"
            round
            size="mini">{{items}}</van-button>
        </div>
        <!-- /选择框 -->
      </van-cell>

      <div class="box">

      </div>
      <comment-like></comment-like>
    </div>
  </div>
</template>

<script>
import CommentLike from '../../components/companyList'

export default {
  name: 'CompanyIndex',
  components: {
    CommentLike
  },
  data () {
    return {
      value: '',
      // 家服公司信息,
      companyMsg: [],
      // 循环按钮
      cycleButton: []

    }
  },
  created () {
    this.getCompanyInformation()
  },
  methods: {
    // 获取家政公司基本信息
    async getCompanyInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      console.log('getInformation -> res', res)
      if (res.status === 200) {
        this.$toast.success('获取信息成功')
        // this.companyMsg.push(res.data)
      }
      this.companyMsg = res.data
      this.cycleButton = this.companyMsg[0].evaluate
      this.cycleButton.push('全部职业')
      console.log(this.companyMsg)
      console.log(this.companyMsg[1].evaluate)
    }
  }

}
</script>

<style lang="scss" scoped>
.company-container {
  height: 100%;
  .nav-header {
    width: 100%;
    position: fixed;
    top: 0;
  }
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
    .van-button--default {
      font-size: 12px;
      padding: 20px;
      border: 1px solid #979191;
      color: #979191;
    }
    .van-cell__title {
      // display: flex;
      // flex-wrap: wrap;
      width: 100%;
      .btn-box {
        display: inline;
        margin: 10px 20px;
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
