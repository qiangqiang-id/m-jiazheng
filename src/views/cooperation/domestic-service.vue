<template>
  <div class="domestic-service">
    <!-- 头部导航 -->
    <van-nav-bar
      class="nav-bar-header"
      left-arrow
      title=" 家政服务"
      :border='false'
    />
    <div class="box"></div>
    <!-- 中间表单内容 -->
    <div class="main-form">
      <van-cell
        title="做家政"
        icon="minus"
      >

      </van-cell>
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.name"
          name="姓名"
          label="*姓名："
          placeholder="请输入姓名"
          :rules="userFormRules.name"
        />
        <van-field
          v-model="user.mobile"
          name="mobile"
          label='*手机号码：'
          placeholder="请输入手机号"
          :rules="userFormRules.mobile"
          type="number"
          maxlength="11"
        />
      </van-form>
      <van-cell-group>
        <van-cell>
          <span slot="title">*意向岗位：</span>
          <div slot="label">
            <van-tag
              round
              plain
              size="medium"
            >月嫂</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >育婴师</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >保洁员</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >保姆</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >早教/托</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >养老/陪</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >家装/搬</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >产康证</van-tag>

          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <span slot="title">*已获证书：</span>
          <div slot="label">
            <van-tag
              round
              plain
              size="medium"
            >月嫂</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >育婴师</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >保洁员</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >保姆</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >早教/托</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >养老/陪</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >家装/搬</van-tag>
            <van-tag
              round
              plain
              size='medium'
            >产康证</van-tag>

          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="NativePlace"
          label="籍贯："
        />
        <van-field
          v-model="CurrentAddress"
          label="现居住地："
        />
        <van-cell
          title="意向家政公司"
          is-link
          :value="company"
          @click="isCompanyShow=true"
        ></van-cell>
        <van-field
          label="备注信息："
          v-model="remarks"
        />
      </van-cell-group>
    </div>
    <!-- 提交按钮 -->
    <van-button
      block
      class="btn-next"
    >提交资料</van-button>

    <!-- 意向家政公司 -->
    <van-popup
      v-model="isCompanyShow"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="isInterestedCompanyShow"
        @cancel="isCompanyShow=false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'domesticService',
  props: {},
  data () {
    return {
      NativePlace: '', // 籍贯
      CurrentAddress: '', // 现居地址
      company: '请选择', // 意向家政公司
      user: {
        name: '',
        mobile: ''
      },
      userFormRules: {
        name: [{ required: true, message: '请填写用户名' }],
        mobile: [{ required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机格式错误' }]
      },
      isCompanyShow: false, // 意向家政公司弹层
      columns: ['波力公司', '放松', '游戏', '打野'],
      remarks: '' // 备注信息

    }
  },
  components: {

  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    isInterestedCompanyShow (value) {
      this.company = value
      this.isCompanyShow = false
    }
  }

}
</script>

<style lang="scss" scoped>
.domestic-service {
  ::v-deep .nav-bar-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 126px;
    background-color: #3f51b5;
    .van-icon-arrow-left {
      color: #fff;
      font-size: 36px;
    }
    .van-nav-bar__title {
      color: #fff;
      font-size: 32px;
      margin-left: 72px;
      font-weight: 600;
    }
  }
  .box {
    height: 54px;
    margin-top: 126px;
    background-color: #3f51b5;
  }
  ::v-deep .main-form {
    height: 1000px;
    width: 704px;
    margin: 0 auto;
    margin-top: -54px;
    border-radius: 10px 10px;
    background-color: skyblue;
  }
  .van-icon-minus {
    transform: rotate(90deg);
    font-weight: 900;
    margin: unset;
    color:#3F51B5;
  }
  .van-tag {
    margin: 20px;
  }
  .btn-next {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: #3f51b5;
  }
}
</style>
