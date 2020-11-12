<template>
  <div class="my-follow-container">
    <!-- 顶部导航 -->
    <div class="nav-head">
      <van-nav-bar left-text="我的关注"
                   left-arrow
                   @click-left="onClickLeft"
                   :border='false'>
      </van-nav-bar>

      <van-tabs v-model="active"
                swipeable
                sticky>
        <van-tab title="家服公司">
          <company-list class="company-list"></company-list>

        </van-tab>
        <van-tab title="家服人员">
          <housekeeping-list v-for="item in infoList "
                             :key="item.id"
                             :userInfo='item'></housekeeping-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import companyList from '@/components/companyList'
import housekeepingList from '@/components/housekeepingList'
export default {
  name: '',
  components: { companyList, housekeepingList },
  props: {},
  data () {
    return {
      active: 1,
      // 家服人员信息
      infoList: [],
      // 家服公司信息,
      companyMsg: []
    }
  },
  created () {
    this.getInformation()
    this.getCompanyInformation()
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
        // this.$toast.success('获取信息成功')
        this.infoList.push(res.datas)
      }
    }, // 获取家政公司基本信息
    async getCompanyInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      console.log('getInformation -> res', res)
      if (res.status === 200) {
        // this.$toast.success('获取信息成功')
        this.companyMsg.push(res.data)
      }
      // const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      // console.log('getInformation -> res', res)
      // if (res.status === 200) {
      //   this.$toast.success('获取信息成功')
      //   this.companyMsg.push(res.data)
      // }
    }

  },

  mounted () {},

  watch: {}

}

</script>

<style lang="scss" scoped>
.my-follow-container {
  height: 100vh;
  overflow-y: auto;
  .nav-head {
    margin-bottom: 200px;
    height: 192px;
    background-color: #3f51b5;
    .van-nav-bar {
      background-color: #3f51b5;
    }
    ::v-deep .van-nav-bar__text {
      color: #fff;
      font-weight: 600;
      font-size: 32px;
    }
    ::v-deep .van-icon {
      color: #fff;
    }
    ::v-deep .van-tabs__nav {
      background-color: #3f51b5;
      .van-tab__text {
        color: #fff;
        font-size: 28px;
      }
      .van-tabs__line {
        background-color: #fff;
      }
    }
  }
}
</style>
