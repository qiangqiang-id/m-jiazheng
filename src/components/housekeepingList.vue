<template>
  <div class="Page-box">
    <div class="Pag">
      <div class="page-left">
        <van-image class="imgs"
          src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="Page-right">
        <div class="Page-right-box">
          <h4>湖南黑马公司阿巴巴巴</h4>
          <p>8000元 / 26天</p>
        </div>
        <van-cell class="Page-bnt">
          <!-- 使用 title 插槽来自定义标题 -->
          <div slot="title"
            class="Page-bnt-box"
            v-for="(item,index) in dd"
            :key="index">
            <van-button plain
              round
              size="mini">{{item}}</van-button>
          </div>
        </van-cell>
        <van-cell class="Page-bottom">
          <!-- 使用 title 插槽来自定义标题 -->
          <span slot="title"
            class="Page-bnt-bottom"
            v-for="(item,index) in hh"
            :key="index">
            {{item}}
          </span>
        </van-cell>

      </div>
    </div>
    <div class="Page-but"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dd: [1111, 2222, 3333, 4444],
      hh: ['阿巴', '你好', '阿巴', '你好']
    }
  }
}
</script>

<style lang="scss" scoped>
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
      width: 70%;
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
            border: 1px solid #3f51b5;
            color: #3f51b5;
          }
        }
      }
      .Page-bottom {
        padding: 0;
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
