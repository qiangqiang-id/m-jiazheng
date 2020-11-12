<template>
  <div class="box">
    <!-- 导航栏 -->
    <van-nav-bar class="nav-top-bar"
                 title="已联系家政人员"
                 left-arrow
                 @click-left="$router.back()" />
    <housekeeping-list class="list-top"
                       v-for="item in infoList"
                       :key="item.id"
                       :value="item"></housekeeping-list>
  </div>
</template>

<script>
import HousekeepingList from '@/components/housekeepingList'
export default {
  components: {
    HousekeepingList
  },
  created () {
    this.getInformation()
  },
  data () {
    return {
      infoList: []
    }
  },

  methods: {
    // 获取家政人员基本信息
    async getInformation () {
      const { data: res } = await this.$axios.get('http://localhost:8080/data')
      if (res.status === 200) {
        this.infoList = res.datas
      } else {
        this.$toast('获取信息失败')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.box {
  padding-top: 131px;
}
.nav-top-bar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 128px;
  line-height: 40px;
  background-color: rgba(63, 81, 181, 100);
  border: 1px solid rgba(255, 255, 255, 100);

  ::v-deep .van-nav-bar__title {
    color: rgba(255, 255, 255, 100);
    font-size: 32px;
    text-align: center;
    margin-left: 72px;
    font-family: PingFangSC-bold;
  }

  ::v-deep .van-icon {
    color: #fff;
    font-size: 36px;
    margin-top: 10px;
  }
}
</style>
