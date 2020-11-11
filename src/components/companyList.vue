<template>
  <van-cell class="waike"
            @click="goCompany">
    <div class="Page-box"
         slot="title">
      <div class="Pag">
        <div class="page-left">
          <van-image class="imgs"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="Page-right">
          <h4>{{value.companyName}}</h4>
          <p>{{value.profession}}</p>
          <van-cell class="Page-bnt">
            <!-- 使用 title 插槽来自定义标题 -->
            <div slot="title"
                 class="Page-bnt-box"
                 v-for="(items,index) in value.evaluate"
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
        <span>{{value.distance}}</span>
        <span class="site">{{value.shopAddress}}</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'companyList',
  props: {
    value: {
      type: Object, required: true
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    // 获取家政公司基本信息
    goCompany () {
      this.$router.push(`/companyInfo/${this.value.id}`)
      this.$store.commit('setCompany', { name: this.value.companyName, address: this.value.shopAddress })
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
    width: 600px;
    display: flex;
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
    .site {
      overflow: hidden; //盒子溢出隐藏
      text-overflow: ellipsis; //文字溢出显示省略号
      white-space: nowrap; //文字不换行
    }
  }
}
</style>
