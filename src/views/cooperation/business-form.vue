<template>
  <div class="business-form">
    <!-- 头部导航 -->
    <van-nav-bar
      class="nav-bar-header"
      left-arrow
      title="入驻商务部"
      :border='false'
      @click-left='$router.back()'
    />
    <div class="box"></div>

    <!-- 中间表单内容 -->
    <div class="main-form">
      <!-- <div><span>企业资料</span></div> -->
      <van-cell
        title="企业资料"
        icon="minus"
      />
      <van-form>
        <van-cell
          title="*法人类型："
          @click="isShowPopup = true"
        >
          <span slot="default">{{information.faRemVal}}</span>
          <van-icon
            slot="default"
            :name="isShowPopup? 'arrow-down':'arrow'"
          />
        </van-cell>

        <van-cell-group>
          <van-field
            v-model="information.enterprise"
            input-align="right"
            label="*企业名称："
          />
          <van-field
            v-model="information.displayName"
            input-align="right"
            label="*显示名称："
          />
          <!-- 允许输入正整数，调起纯数字键盘 -->
          <van-field
            class="CreditCardBox"
            v-model="information.bankCard"
            label="*社会信用代码："
            input-align="right"
            maxlength="18"
            type="number"
            placeholder="请输入18位统一社会信用"
          />
          <van-cell
            title="*注册时间："
            @click="isShowPopupDay = true"
          >
            <span slot="default">{{information.showDay}}</span>
            <van-icon
              slot='default'
              :name="isShowPopupDay? 'arrow-down':'arrow'"
            />
          </van-cell>
          <van-field
            class="CreditCardBox"
            label="*注册资本(万元)："
            input-align="right"
            type="number"
            v-model="information.capital"
          />

          <van-field
            readonly
            clickable
            name="area"
            :value="information.address"
            label="*注册地区："
            input-align="right"
            is-link
            placeholder="点击选择省市区"
            @click="showArea = true"
          >
            <van-icon :name="showArea ? 'arrow-down':'arrow'" />
          </van-field>
          <van-cell
            title="*企业类型："
            :value="information.enterpriseValue"
            is-link
            @click="showEnterprise = true"
          />
        </van-cell-group>
        <van-cell-group>
          <van-cell>
            <span slot="title">*主营业务：</span>
            <span
              slot="label"
              v-for="(item,index) in information.management"
              :key="index"
            >
              <van-tag
                round
                plain
                size="large"
              >{{item}}</van-tag>
            </span>
          </van-cell>
        </van-cell-group>
      </van-form>
    </div>
    <van-button
      class="btn-next"
      block
      @click="SubmitInformation"
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
import areaList from '@/assets/Area'
import { Dialog } from 'vant'
export default {
  name: 'businessForm',
  props: {},
  components: {
    // areaList
  },
  data () {
    return {
      isShowPopup: false, // 法人弹层
      columns: ['企业法人', '个体法人', '个人企业', '合伙企业'],
      isShowPopupDay: false, // 注册时间显示弹层
      minDate: new Date(1950, 12, 31),
      maxDate: new Date(2070, 12, 31),
      currentDate: new Date(),
      showArea: false,
      areaList, // 省区市
      showEnterprise: false, // 企业类型
      enterpriseColumns: ['个人企业', '私人企业', '游戏产业'], // 企业类型
      // management: '标签',
      // 入住商务部信息
      information: {
        // faRemVal: '', // 法人类型下拉框
        // enterprise: '', // 企业名称
        // displayName: '', // 显示名称
        // bankCard: '', // 社会卡号
        // showDay: '请选择工商注册时间', // 工商注册时间
        // capital: '', // 注册资本
        // address: '', // 注册地区
        // enterpriseValue: '' // 企业类型
      }
    }
  },
  created () {
    this.registrationInformation()
  },
  methods: {
    onConfirm (value) {
      this.isShowPopup = false
      // console.log(value, index)
      this.information.faRemVal = value
    },
    // 注册时间
    onConfirmDay (value) {
      this.currentDate = dayjs(value).format('YYYY-MM-DD')
      this.information.showDay = this.currentDate
      // console.log(this.information.showDay)
      this.isShowPopupDay = false
    },
    // 地址
    onConfirmAddress (values) {
      this.information.address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    onEnterpriseConfirm (val) {
      this.information.enterpriseValue = val
      this.showEnterprise = false
    },

    // 获取数据
    async registrationInformation () {
      try {
        const { data: res } = await this.$axios.get('http://localhost:8080/register')
        // console.log(res)
        this.information = res.register
      } catch (error) {
        this.$toast('获取数据失败')
      }
    },
    SubmitInformation () {
      Dialog.confirm({
        title: '提示',
        message: '已确认信息无误'
      }).then(async () => {
        const { data: res } = await this.$axios.post('http://localhost:8080/register', this.information)
        this.information = res.register
        console.log(res)
        this.$toast.success('操作成功')
        this.registrationInformation()
      }).catch(() => {
        this.information = ''
        this.$toast('已取消')
      })
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
    background-color: skyblue;
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
      margin: 15px 10px;
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
