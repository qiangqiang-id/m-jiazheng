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
      <city-inquire></city-inquire>
      <!-- /导航栏 -->

      <!-- 选择框 -->
      <van-cell class="attribute-tag">
        <!-- 使用 title 插槽来自定义标题 -->
        <div slot="title"
          class="btn-box"
          v-for="(items,index) in occupation"
          :key="index">
          <van-button plain
            round
            size="mini">{{items}}</van-button>
        </div>
        <!-- /选择框 -->
      </van-cell>

      <div class="box">

      </div>
      <comment-like v-for=" item in companyMsg"
        :key="item.id"
        :value='item'></comment-like>

    </div>

  </div>
</template>

<script>
import CommentLike from '@/components/companyList'
import CityInquire from '@/components/CityInquire '
export default {
  name: 'CompanyIndex',
  components: {
    CommentLike,
    CityInquire
  },
  data () {
    return {

      // 家服公司信息,
      companyMsg: [],
      // 职业
      occupation: []

    }
  },
  created () {
    this.getCompanyInformation()
  },
  methods: {
    // 获取家政公司基本信息
    async getCompanyInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      // console.log('getInformation -> res', res)
      if (res.status === 200) {
        // this.$toast.success('获取信息成功')
        // this.companyMsg.push(res.data)
        this.companyMsg = res.data
        this.occupation = this.companyMsg[0].profession
        this.occupation.push('全部职业')
        // console.log(this.companyMsg)
      }
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

  .attribute-tag {
    padding: 26px;
    // height: 183px;
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
    .van-cell__title {
      // display: flex;
      // flex-wrap: wrap;
      width: 100%;
      .btn-box {
        display: inline;
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
