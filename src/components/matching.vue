<template>
  <div class="matching-container">
    <!-- 职业类型 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          职业类型
        </div>
      </van-cell>
      <van-grid title="家政"
                class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 学历 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          学历
        </div>
      </van-cell>
      <van-grid title="家政"
                class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'>
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />

      </van-grid>
    </div>
    <!-- 民族 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          民族
        </div>
      </van-cell>
      <van-grid title="家政"
                class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'>
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
      </van-grid>
    </div>
    <!-- 婚姻状况 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          婚姻状况
        </div>
      </van-cell>
      <van-grid title="家政"
                class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'>
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
      </van-grid>
    </div>
    <!-- 生肖 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          婚姻状况
        </div>
      </van-cell>
      <van-grid title="家政"
                class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'>
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
        <van-grid-item text="文字"
                       class="text" />
      </van-grid>
    </div>
    <!-- 按钮 -->
    <div class="buttons">
      <van-button round
                  type="info"
                  class="button">清除条件</van-button>
      <van-button round
                  type="info"
                  class="button">确认筛选</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'matching',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () {},

  computed: {},

  methods: {},

  mounted () {},

  watch: {}

}

</script>

<style lang="scss" scoped>
.matching-container {
  overflow: auto;
  padding-bottom: 105px;
  ::v-deep .van-grid-item__content {
    height: 32px;
    border-radius: 10px;
    border: 1px solid #827e7e;
    .van-grid-item__text {
      color: #827e7e;
    }
  }
  .van-grid-item {
    margin: 24px 0 24px 0;
  }
  .van-cell__title {
    font-size: 30px;
    color: #101010;
  }
  ::v-deep .buttons {
    display: flex;
    justify-content: space-around;
    .button {
      width: 320px;
      height: 75px;
    }
  }
  .fold {
    text-align: center;
    color: #827e7e;
    font-size: 30px;
  }
}
</style>
