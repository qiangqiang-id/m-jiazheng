<template>
  <van-cell @click="goHousekeeping">
    <div class="Page-box"
         slot="title">
      <div class="Pag">
        <div class="page-left">
          <van-image class="imgs"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="Page-right">
          <div class="Page-right-box">
            <h4>{{value.name}}</h4>
            <p>{{value.price}}元 / 26天</p>
          </div>
          <van-cell class="Page-bnt">
            <!-- 使用 title 插槽来自定义标题 -->
            <div slot="title"
                 class="Page-bnt-box"
                 v-for="(items,index) in value.label"
                 :key="index">
              <van-button plain
                          round
                          size="mini">{{items}}</van-button>
            </div>
          </van-cell>
          <van-cell class="Page-bottom">
            <!-- 使用 title 插槽来自定义标题 -->
            <span class="Page-bnt-bottom">
              {{value.address}}
            </span>
            <span class="Page-bnt-bottom">
              {{value.age}}岁
            </span>
            <span class="Page-bnt-bottom">
              服务{{value.service}}户
            </span>
            <span class="Page-bnt-bottom">
              评价{{value.service}}条
            </span>
          </van-cell>

        </div>
      </div>
      <div class="Page-but"></div>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'housekeepingList',
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
    goHousekeeping () {
      this.$router.push(`/housekeeping/${this.value.id}`)
      this.$store.commit('setHousekeeping', { name: this.value.name, address: this.value.address })
    }
  }

}
</script>

<style lang="scss" scoped>
.van-cell {
  padding: 0;
  margin: 0;
}
.Page-box {
  padding: 32px;
  padding-right: 28px;
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
      width: 80%;
      .Page-right-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        h4 {
          font-size: 14px;
          margin: 0;
          padding: 0;
          color: #000;
        }
        p {
          font-size: 12px;
          margin: 0;
          padding: 0;
          color: #979191;
        }
      }
      .Page-bnt {
        padding: 0;
        display: flex;
        margin-bottom: 20px;
        .Page-bnt-box {
          display: inline;
          margin: 0 5px;
          .van-button {
            font-size: 12px;
            padding: 20px;
            margin: 5px;
            border: 1px solid #3f51b5;
            color: #3f51b5;
          }
        }
      }
      .Page-bottom {
        box-sizing: border-box;
        padding: 0;
        width: 480px;
        .van-cell__value {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .Page-bnt-bottom {
          font-size: 12px;
          color: #979191;
          padding-right: 5px;
          margin-left: 5px;
          border-right: 1px solid #979191;
          &:last-child {
            border-right: 0;
          }
        }
      }
    }
  }
  .Page-but {
    height: 1px;
    width: 100%;
    background-color: #ece5e5;
    margin-top: 36px;
  }
}
</style>
