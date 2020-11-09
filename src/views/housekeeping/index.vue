<template>
  <div>
    <house-keeping-list v-for=" item in infoList"
                        :key="item.id"
                        :value='item'>
    </house-keeping-list>
  </div>
</template>

<script>

import HouseKeepingList from '@/components/housekeepingList'

export default {
  name: 'HousekeepingIndex',
  components: {
    HouseKeepingList
  },
  data () {
    return {
      value: '',
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

      // console.log('getInformation -> res', res)
      if (res.status === 200) {
        this.$toast.success('获取信息成功')
        // this.infoList.push(res.datas)
        this.infoList = res.datas
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
