import { Dialog } from 'vant';
<template>
  <div class="domestic-service">
    <!-- 头部导航 -->
    <van-nav-bar
      class="nav-bar-header"
      left-arrow
      title=" 家政服务"
      :border='false'
      @click-left='$router.back()'
    />
    <div class="box"></div>
    <!-- 中间表单内容 -->
    <div class="main-form">
      <van-cell
        title="做家政"
        icon="minus"
      >

      </van-cell>
      <van-form
        @submit="onSubmit"
        autocomplete="off"
      >
        <van-field
          v-model.trim="jobInformation.name"
          name="姓名"
          label="*姓名："
          placeholder="请输入姓名"
          :rules="userFormRules.name"
        />
        <van-field
          v-model="jobInformation.mobile"
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
          <span
            slot="label"
            v-for="(item,index) in jobInformation.intended"
            :key="index"
          >
            <van-tag
              round
              plain
              size="medium"
            >{{item}}</van-tag>
          </span>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <span slot="title">*已获证书：</span>
          <span
            slot="label"
            v-for="(item,index) in jobInformation.certificate"
            :key="index"
          >
            <van-tag
              round
              plain
              size="medium"
            >{{item}}</van-tag>
          </span>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="jobInformation.NativePlace"
          label="籍贯："
        />
        <van-field
          v-model="jobInformation.CurrentAddress"
          label="现居住地："
        />
        <van-cell
          title="意向家政公司："
          is-link
          @click="isCompanyShow=true"
        >
          <span slot="default">{{jobInformation.company}}</span>
        </van-cell>
        <van-field
          label="备注信息："
          v-model="jobInformation.remarks"
        />
      </van-cell-group>
    </div>
    <!-- 提交按钮 -->
    <van-button
      block
      class="btn-next"
      @click="submitOccupation"
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
import { Dialog } from 'vant'
export default {
  name: 'domesticService',
  props: {},
  data () {
    return {
      // NativePlace: '', // 籍贯
      // CurrentAddress: '', // 现居地址
      // company: '请选择', // 意向家政公司
      // user: {
      //   name: '',
      //   mobile: ''
      // },
      isCompanyShow: false, // 意向家政公司弹层
      columns: ['波力公司', '放松', '游戏', '打野'],
      // remarks: '', // 备注信息
      jobInformation: {
        // name: '',
        // mobile: '',
        // NativePlace: '', // 籍贯
        // CurrentAddress: '', // 现居地址
        // company: '请选择', // 意向家政公司
        // remarks: '' // 备注信息
      },
      userFormRules: {
        name: [{ required: true, message: '请填写用户名' }],
        mobile: [{ required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机格式错误' }]
      }
    }
  },
  components: {},
  created () {
    this.housekeepingProfession()
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    isInterestedCompanyShow (value) {
      this.jobInformation.company = value
      this.isCompanyShow = false
    },
    async housekeepingProfession () {
      try {
        const { data: res } = await this.$axios.get('http://localhost:8080/jobWanted')
        this.jobInformation = res.jobWanted
        console.log(this.jobInformation)
      } catch (error) {
        this.$toast.fail('获取信息失败')
      }
    },
    // 提交
    submitOccupation () {
      Dialog.confirm({
        title: '提示',
        message: '已确认信息无误'
      }).then(async () => {
        const { data: res } = await this.$axios.post('http://localhost:8080/jobWanted', this.jobInformation)
        this.jobInformation = res.jobWanted
        this.housekeepingProfession()
        console.log('保存后', this.jobInformation)
      }).catch(() => {
        this.jobInformation = ''
        this.$toast('已取消')
      })
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
    color: #3f51b5;
  }
  .van-tag {
    margin: 15px;
  }
  .btn-next {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: #3f51b5;
  }
  .van-field__control {
    background-color: unset;
  }
}
</style>
