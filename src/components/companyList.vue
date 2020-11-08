<template>
  <van-cell class="waike">
    <div class="Page-box"
      slot="title"
      v-for="item in data"
      :key="item.id">
      <div class="Pag">
        <div class="page-left">
          <van-image class="imgs"
            src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="Page-right">
          <h4>湖南黑马公司阿巴巴巴</h4>
          <p>{{item.age}}</p>
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

        </div>

      </div>
      <div class="Page-buttom">
        <i class="icon-md-location_on housekeeping"></i>
        <span>22.68km</span>
        <span>湖南省长沙市天心区</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  data () {
    return {
      dd: [1111, 2222, 3333, 4444],
      data: [
        { id: 1, age: 'ahaha' },
        { id: 2, age: 'ahaha' },
        { id: 3, age: 'ahaha' },
        { id: 4, age: 'ahaha' },
        { id: 5, age: 'ahaha' }
      ]
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
