<template>
  <div class="business-form">
    <!-- 头部导航 -->
    <van-nav-bar
      class="nav-bar-header"
      left-arrow
      title="入驻商务部"
    ></van-nav-bar>
    <div class="box"></div>

    <!-- 中间表单内容 -->
    <div class="main-form">
      <van-cell
        title="企业资料"
        icon="minus"
      />

      <van-form>
        <van-cell
          title="*法人类型"
          is-link
          :value="faRemVal"
          @click="showLegalPerson"
        />

        <van-cell-group>
          <van-field
            v-model="enterprise"
            label="*企业名称："
          />
          <van-field
            v-model="displayName"
            label="*显示名称："
          />
          <!-- 允许输入正整数，调起纯数字键盘 -->
          <van-field
            class="CreditCardBox"
            v-model="bankCard"
            type="digit"
            label="*社会信用卡号："
            placeholder="请输入18位统一社会信用卡号"
          />
          <van-cell
            title="*注册时间："
            is-link
            :value="showDay"
            @click="isShowPopupDay = true"
          />
          <van-field
            class="CreditCardBox"
            label="*注册时间(万元)："
          />

          <van-field
            readonly
            clickable
            name="area"
            :value="address"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
          />

          <van-cell
            title="*企业类型："
            :value="enterpriseValue"
            is-link
            @click="showEnterprise = true"
          />
        </van-cell-group>
        <van-cell-group>
          <van-cell>
            <span slot="title">*主营业务： </span>
            <div slot="label">
              <van-tag
                round
                plain
                size="large"
              >标签</van-tag>
              <van-tag
                round
                plain
                size="large"
              >标签</van-tag>
              <van-tag
                round
                plain
                size="large"
              >标签</van-tag>
            </div>
          </van-cell>
        </van-cell-group>
      </van-form>
    </div>
    <van-button
      class="btn-next"
      block
    >下一步</van-button>
    <!-- 法人弹层 -->
    <van-popup
      v-model="isShowPopup"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel=isShowPopup=false"
      />
    </van-popup>

    <!-- 时间弹层 -->
    <van-popup
      v-model="isShowPopupDay"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="isShowPopupDay=false"
        @confirm="onConfirmDay"
      />
    </van-popup>

    <!-- 选择地址 -->
    <van-popup
      v-model="showArea"
      position="bottom"
    >
      <van-area
        :area-list="areaList"
        @confirm="onConfirmAddress"
        @cancel="showArea = false"
      />
    </van-popup>

    <!-- 企业类型弹层 -->
    <van-popup
      v-model="showEnterprise"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        show-toolbar
        :columns="enterpriseColumns"
        @confirm="onEnterpriseConfirm"
        @cancel="showEnterprise=false"
      />
    </van-popup>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'businessForm',
  props: {},
  data () {
    return {
      enterprise: '', // 企业名称
      displayName: '', // 显示名称
      bankCard: '', // 社会卡号
      isShowPopup: false, // 法人弹层
      faRemVal: '', // 法人类型下拉框
      columns: ['法人代表', '专业磨刀'],
      showDay: '请选择工商注册时间', // 工商注册时间
      isShowPopupDay: false, // 注册时间显示弹层
      minDate: new Date(1950, 12, 31),
      maxDate: new Date(2070, 12, 31),
      currentDate: new Date(),
      address: '',
      showArea: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      showEnterprise: false, // 企业类型
      enterpriseValue: '',
      enterpriseColumns: ['个人企业', '私人企业', '游戏产业'] // 企业类型
    }
  },
  components: {

  },
  methods: {
    showLegalPerson () {
      this.isShowPopup = true
    },
    onConfirm (value) {
      this.isShowPopup = false
      // console.log(value, index)
      this.faRemVal = value
    },
    // 注册时间
    onConfirmDay (value) {
      this.currentDate = dayjs(value).format('YYYY-MM-DD')
      console.log(this.currentDate)
      this.showDay = this.currentDate
      this.isShowPopupDay = false
    },
    // 地址
    onConfirmAddress (values) {
      this.address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    //
    onEnterpriseConfirm (val) {
      this.enterpriseValue = val
      this.showEnterprise = false
    }
  }
}
</script>

<style lang="scss" scoped>
.business-form {
  height: 100%;
  width: 100%;
  ::v-deep .nav-bar-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
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
    // background-color: skyblue;
    // height: 900px;
    margin: 0 auto;
    margin-top: -54px;
    border-radius: 4px 4px;
    .cell-A {
      margin-bottom: 2px;
      font-size: 28px;
      .tupiao {
        // width: 8px;
        font-size: 8px;
        height: 28px;
        color: #3f51b5;
      }
    }
    .CreditCardBox .van-cell__title {
      width: unset;
    }
    .van-tag {
      margin: 20px;
    }
  }
  .btn-next {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: 28px;
    background-color: #3f51b5;
  }
  .van-icon-minus {
    transform: rotate(90deg);
    font-weight: 900;
    color: #3f51b5;
    // margin: unset;
  }
}
</style>
