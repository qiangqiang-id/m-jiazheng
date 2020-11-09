<template>
  <div class="look-index">
    <!-- nav导航栏 -->
    <van-nav-bar
      class="nav-bar"
      @click-left="$router.back()"
    >
      <div
        slot="left"
        class="nav-bar-left"
      >
        <span class="icon-mb-mobile-back  housekeeping"></span>
        <span class="nav-bar-text">找家政服务</span>
      </div>

    </van-nav-bar>
    <!-- /nav导航栏 -->
    <!-- 中间部分 -->
    <div class="look-middle">
      <van-cell class="middle-first">
        <div
          slot="icon"
          class="middle-icon"
        ></div>
        <div slot="title">找家政</div>
      </van-cell>
      <!-- 需求岗位 -->
      <div class="look-jobs">
        <div class="jobs-text">*需求岗位</div>
      </div>
      <!-- /需求岗位 -->
      <!-- 详细信息 -->
      <van-cell-group>
        <van-field
          label="手机号码"
          placeholder="请输入手机号码"
          colon
          required
        />
        <van-field
          label="年龄"
          colon
        >
          <div slot="extra">
            <van-dropdown-menu>
              <van-dropdown-item
                v-model="value1"
                :options="option1"
              />
            </van-dropdown-menu>
          </div>
        </van-field>
        <van-field
          label="薪资"
          colon
        />
        <van-field
          label="住家"
          colon
        >
        </van-field>
        <van-field
          label="联系人"
          colon
        />
        <van-field
          label="籍贯要求"
          colon
        />
        <van-field
          label="工作地点"
          colon
        />
      </van-cell-group>
      <!-- 详细信息 -->
    </div>
    <!-- /中间部分 -->
    <!-- 提交按钮 -->
    <van-button
      block
      type="info"
      class="look-btn"
    >
      提交资料
    </van-button>
    <!--/提交按钮 -->
  </div>
</template>

<script>
export default {
  name: 'LookIndex',
  data () {
    return {
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.look-index {
  font-weight: 700;
  .nav-bar {
    height: 180px;
    background-color: rgba(63, 81, 181, 100);
    .nav-bar-left {
      color: rgba(255, 255, 255, 100);
      font-size: 32px;
      .nav-bar-text {
        padding-left: 10px;
      }
    }
  }
  .look-middle {
    position: absolute;
    top: 140px;
    bottom: 150px;
    z-index: 1;
    width: 704px;
    // height: 100%;
    margin: 0px 24px;
    border-radius: 10px;
    .middle-first {
      border-bottom: 1px solid #f8f8f8;
      .middle-icon {
        width: 8px;
        height: 30px;
        margin-top: 10px;
        background-color: blue;
        margin-right: 10px;
      }
    }
    .look-jobs {
      // background-color: pink;
      height: 100px;
      border-bottom: 1px solid #f8f8f8;
      .jobs-text {
        margin: 30px 0px 30px 30px;
        font-size: 26px;
      }
    }
  }
  .look-btn {
    position: fixed;
    bottom: 0;
    background-color: rgba(63, 81, 181, 100);
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
