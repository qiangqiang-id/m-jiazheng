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
          <div slot="title">*意向岗位：</div>
          <template #label>
            <!-- itemIndex.indexOf(index) === -1 -->
            <van-tag
              round
              plain
              :class="item.active ? 'highLight':''"
              size="medium"
              v-for="(item,index) in jobInformation.intended"
              :key="index"
              ref="tag-ref"
              @click='clickSelect(item,index)'
            >{{item.occupation_name}}</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <div slot="title">*已获证书：</div>
          <template #label>
            <!-- <span
              slot="label"
              v-for="(item,index) in jobInformation.certificate"
              :key="index"
            > -->
            <van-tag
              v-for="(item,index) in jobInformation.certificate"
              :key="index"
              round
              plain
              size="medium"
            >{{item}}</van-tag>
            <!-- </span> -->
            <!-- <span slot="label"> -->
            <van-field
              class="field-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </van-field>
            <van-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showField"
            >+ 点击添加</van-button>
            <!-- </span> -->

          </template>
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
          class="fieldTop"
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
      // active: false,
      itemIndex: [],
      isCompanyShow: false, // 意向家政公司弹层
      // intentionWork: ['月嫂', '育婴师', '保洁/清洗', '保姆', '早教/托', '养老/陪护', '家装/搬家', '产康师'],
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
      },
      inputVisible: false, // 获取证书标签显示与隐藏
      inputValue: ''
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
        // console.log(this.jobInformation)
      } catch (error) {
        this.$toast.fail('获取信息失败')
      }
    },
    // 提交
    submitOccupation () {
      // this.itemIndex.forEach((item) => {
      //   this.jobInformation.intended[item].active = true
      // })
      Dialog.confirm({
        title: '提示',
        message: '已确认信息无误'
      }).then(async () => {
        const { data: res } = await this.$axios.post('http://localhost:8080/jobWanted', this.jobInformation)
        this.jobInformation = res.jobWanted
        this.housekeepingProfession()
        console.log('提交保存后', this.jobInformation)
      }).catch(() => {
        this.jobInformation = ''
        this.$toast('已取消')
      })
    },
    showField () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
      console.log('ok')
    },
    clickSelect (item, index) {
      // const i = this.itemIndex.indexOf(index)
      // console.log(item)
      item.active = !item.active
      console.log(item.active)

      // if (i === -1) {
      //   this.itemIndex.push(index)
      // } else {
      //   this.itemIndex.splice(i, 1)
      // }
      // console.log(this.itemIndex)

      // console.log(item, index)
      // this.jobInformation.intended.forEach((item, i) => {
      //   if (i === index) {
      //     item.active = !item.active
      //     console.log(item.active)
      //   }
      // })
      // console.log(this.jobInformation.intended)
    },
    handleInputConfirm () {
      if (this.inputValue.trim().length === 0) {
        this.inputValue = ''
        this.inputVisible = false
        return
      }
      this.jobInformation.certificate.push(this.inputValue.trim())
      this.inputValue = ''
      this.inputVisible = false
      console.log('ok')
    }

  }

}
</script>

<style lang="scss" scoped>
.domestic-service {
  background-color:#d4cccc4d;
  height: 100%;
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
    width: 704px;
    margin: 0 auto;
    margin-top: -54px;
    border-radius: 10px 10px;
  }
  .van-icon-minus {
    transform: rotate(90deg);
    font-weight: 900;
    margin: unset;
    color: #3f51b5;
  }
  .van-tag {
    height: 40px;
    line-height: 40px;
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

  .button-new-tag {
    margin: 15px;
    height: 46px;
    line-height: 46px;
    padding-top: 0;
    padding-bottom: 0;
    border: 1px solid #a7a2a2;
    border-radius: 23px;
    color: #a7a2a2;
  }
  .field-new-tag {
    width: 150px;
    height: 46px;
    line-height: 46px;
    border-radius: 23px;
    margin: 15px;
    padding: 0 10px;
    border: 1px solid #a7a2a2;
  }
  .highLight {
    background-color: rgb(32, 164, 204);
    color: #fff;
  }
  .van-tag--medium {
    padding: 0.3em 0.3rem;
  }
  .fieldTop {
    margin-bottom: 100px;
  }
}
</style>
