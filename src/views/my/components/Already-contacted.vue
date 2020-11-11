<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar class="nav-top-bar"
                 title="已联系家政人员"
                 left-arrow
                 @click-left="$router.back()" />
    <company-list class="list-top" />
  </div>
</template>

<script>
import CompanyList from '@/views/housekeeping/index'
export default {
  components: {
    CompanyList
  },
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

      // console.log('getInformation -> res', res)
      if (res.status === 200) {
        this.$toast.success('获取信息成功')
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
.list-top {
  margin-top: 128px;
}
</style>
