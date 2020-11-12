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
        <div
          slot="default"
          class="jobs-main"
        >
          <van-tag
            round
            plain
            :class='item.active ? "gaoliang":""'
            size='large'
            v-for="(item,index) in list.jobs"
            :key="index"
            @click="changeColor(item)"
          >{{item.profession}}</van-tag>
        </div>
        <div
          slot="default"
          class="jobs-main"
        >
        </div>
      </div>
      <!-- /需求岗位 -->
      <!-- 详细信息 -->
      <van-form>
        <van-field
          label="手机号码"
          placeholder="请输入手机号码"
          colon
          type="number"
          maxlength="11"
          :rules="[{ required: true, message: '请填写手机号码' }]"
          v-model.trim="list.mobile"
        />
        <van-field
          label="年龄"
          colon
          v-model="list.age"
        >
        </van-field>
        <van-field
          label="薪资"
          colon
          v-model="list.pay"
        />
        <van-field
          label="住家"
          colon
          v-model="list.home"
        >
        </van-field>
        <van-field
          label="联系人"
          colon
          v-model="list.username"
        />
        <van-field
          label="工作地点"
          ag
          colon
          v-model="list.address"
        />
      </van-form>
      <!-- 详细信息 -->
    </div>
    <!-- /中间部分 -->
    <!-- 提交按钮 -->
    <van-button
      block
      type="info"
      class="look-btn"
      @click="onSubmit"
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
      list: {}
    }
  },
  created () {
    this.loadLook()
  },
  methods: {
    async loadLook () {
      try {
        const { data: res } = await this.$axios.get('http://localhost:8080/look')
        this.list = res.demandJobs
        // console.log(this.list)
      } catch (e) {
        this.$toast('获取数据失败')
      }
    },
    async onSubmit () {
      if (this.list.mobile === '') {
        return this.$toast('请填写手机号码')
      }
      try {
        const { data: res } = await this.$axios.post('http://localhost:8080/look', this.list)
        this.list = res.demandJobs
        this.$toast.success('提交成功')
        this.$router.push('/home')
        // console.log(this.list)
      } catch (e) {
        this.$toast.fail('提交数据失败')
      }
    },
    changeColor (item) {
      item.active = !item.active
      // console.log(item)
    }

  }
}
</script>

<style lang="scss" scoped>
::v-deep.look-index {
  font-weight: 700;
  background-color: pink;
  height: 100%;
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
      height: 240px;
      border-bottom: 1px solid #f8f8f8;
      margin: 15px 15px;
      .jobs-text {
        margin-top: 10px;
        font-size: 32px;
      }
      .jobs-main {
        .van-tag {
          margin: 10px;
          color: #b6b2b2;
          border: 1px solid #b6b2b2;
        }
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
  .gaoliang {
    background-color: #3f51b5;
    color: #fff;
  }
}
</style>
