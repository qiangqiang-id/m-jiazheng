<template>
  <div class="my-follow-container">
    <!-- 顶部导航 -->
    <div class="nav-head">
      <van-nav-bar left-text="我的关注"
                   left-arrow
                   @click-left="onClickLeft"
                   :border='false'>
      </van-nav-bar>
      <!-- 底部按钮 -->
      <div class="buttons">
        <van-grid :column-num="2"
                  :border='false'
                  :clickable='true'>
          <van-grid-item text="家服公司" />
          <van-grid-item text="家服人员" />
        </van-grid>
      </div>
      <!-- 主体内容 -->
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <van-cell v-for="item in list"
                  :key="item"
                  :title="item">
          <van-image width="2.5rem"
                     height="2.5rem"
                     fit="contain"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div slot="title"
               class="title van-multi-ellipsis--l2">张丽丽</div>
          <div slot="label"
               class="label">

            <div class="userInfo van-multi-ellipsis--l2">
              <span>湖南长沙</span>
              <span>41岁</span>
              <span>服务13户</span>
              <span>评价13条</span>
            </div>
          </div>

        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {},

  computed: {},

  methods: {
    // 返回按钮
    onClickLeft () {

    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }

  },

  mounted () {},

  watch: {}

}

</script>

<style lang="scss" scoped>
.my-follow-container {
  .nav-head {
    height: 192px;
    background-color: #3f51b5;
    .van-nav-bar {
      background-color: #3f51b5;
    }
    ::v-deep .van-nav-bar__text {
      color: #fff;
      font-weight: 600;
      font-size: 32px;
    }
    ::v-deep .van-icon {
      color: #fff;
    }
    ::v-deep .van-grid-item__content {
      background-color: #3f51b5;
      .van-grid-item__text {
        color: #fff;
        font-size: 28px;
      }
    }
  }
}
</style>
