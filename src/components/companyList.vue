<template>
  <van-cell class="waike">
    <div class="Page-box"
      slot="title"
      v-for="item in companyMsg"
      :key="item.id">
      <div class="Pag">
        <div class="page-left">
          <van-image class="imgs"
            src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="Page-right">
          <h4>{{item.companyName}}</h4>
          <p>{{item.companyName}}</p>
          <van-cell class="Page-bnt">
            <!-- 使用 title 插槽来自定义标题 -->
            <div slot="title"
              class="Page-bnt-box"
              v-for="(items,index) in item.evaluate"
              :key="index">
              <van-button plain
                round
                size="mini">{{items}}</van-button>
            </div>
          </van-cell>

        </div>

      </div>
      <div class="Page-buttom">
        <i class="icon-md-location_on housekeeping"></i>
        <span>{{item.distance}}</span>
        <span>{{item.shopAddress}}</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  data () {
    return {

      // 家服公司信息,
      companyMsg: []
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
        // this.$toast.success('获取信息成功')
        // this.companyMsg.push(res.data)
      }
      this.companyMsg = res.data
      // console.log(this.companyMsg)
      // console.log(this.companyMsg[1].evaluate)
    }
  }
}
</script>

<style lang="scss" scoped>
.waike {
  padding: 0;
  margin: 0;
}
.Page-box {
  padding: 32px;
  background-color: #fff;

  .Pag {
    display: flex;
    ::v-deep.page-left {
      width: 160px;
      height: 172px;
      margin-right: 32px;
      .imgs {
        width: 100%;
        height: 100%;
      }
    }
    .Page-right {
      flex: 5;

      h4 {
        font-size: 14px;
        margin: 0;
        padding: 0;
        color: #000;
      }
      p {
        font-size: 12px;
        margin: 26px 0;
        padding: 0;
        color: #979191;
      }

      .Page-bnt {
        padding: 0;
        display: flex;
        .Page-bnt-box {
          display: inline;
          margin: 0 5px;
          .van-button {
            font-size: 12px;
            padding: 20px;
            border: 1px solid #3f51b5;
            color: #3f51b5;
          }
        }
      }
    }
  }
  .Page-buttom {
    height: 60px;
    border-bottom: 1px solid rgb(223, 218, 218);
    padding: 17px;
    i {
      list-style: none;
    }

    span {
      color: #000;
      font-size: 12px;
      &:nth-of-type(1) {
        margin: 0 14px;
        color: #979191;
      }
    }
  }
}
</style>
