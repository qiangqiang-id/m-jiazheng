<template>
  <div class="my-follow-container">
    <!-- 顶部导航 -->
    <div class="nav-head">
      <van-nav-bar left-text="我的关注"
                   class="my-follow-text"
                   left-arrow
                   @click-left="$router.back()"
                   :border='false'>
      </van-nav-bar>
      <!-- 底部按钮 -->
      <van-tabs v-model="active"
                swipeable
                sticky
                animated>
        <van-tab title="家服公司">
          <company-list v-for="item in companyMsg"
                        :key="item.id"
                        :value='item'></company-list>

        </van-tab>
        <van-tab title="家服人员">
          <housekeeping-list v-for="item in infoList "
                             :key="item.id"
                             :value='item'></housekeeping-list>
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

    // 获取家政人员基本信息
    async getInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/data|get')

      console.log('getInformation -> res', res)
      if (res.status === 200) {
        // this.$toast.success('获取信息成功')
        this.infoList.push(...res.datas)
      }
    }, // 获取家政公司基本信息
    async getCompanyInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      console.log('getInformation -> res', res)
      if (res.status === 200) {
        // this.$toast.success('获取信息成功')
        // console.log(res.data)
        this.companyMsg.push(...res.data)
      }
      // const { data: res } = await this.$axios.get('http://localhost:8080/info|get')

      // console.log('getInformation -> res', res)
      // if (res.status === 200) {
      //   this.$toast.success('获取信息成功')
      //   this.companyMsg.push(res.data)
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
  height: 84vh;
  overflow-y: auto;
  padding-top: 180px;
  .my-follow-text {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  ::v-deep .van-tabs__wrap {
    position: fixed;
    top: 93px;
    left: 0;
    right: 0;
    z-index: 100;
  }
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
