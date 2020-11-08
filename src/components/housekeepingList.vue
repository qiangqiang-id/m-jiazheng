<template>
  <div class="Page-box">
    <div class="Pag">
      <div class="page-left">
        <van-image class="imgs"
          src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="Page-right">
        <h4>湖南黑马公司阿巴巴巴</h4>
        <p>你的笑容</p>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <van-button plain
              round
              size="mini">朴素按钮</van-button>
          </template>
        </van-cell>

      </div>

    </div>
    <div class="Page-buttom">
      <i class="icon-md-location_on housekeeping"></i>
      <span>22.68km</span>
      <span>湖南省长沙市天心区</span>
    </div>
  </div>
</template>

<script>
export default {

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
      .van-cell {
        padding: 0;
        .van-button {
          font-size: 12px;
          padding: 20px;
          border: 1px solid #3f51b5;
          color: #3f51b5;
        }
      }
    }
  }
  .Page-buttom {
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
