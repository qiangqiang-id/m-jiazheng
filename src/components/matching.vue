<template>
  <div class="matching_company-container">
    <!-- 职业类型 -->
    <!-- <div v-for="(item,index) in  companyList"
         :key="index">
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{item.title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in item.list"
                       :key='k'
                       @click="addStyle(item,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id=== i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div> -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[0].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[0].list"
                       :key='k'
                       @click="addStyle1(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id === i}">{{i}}</span>
        </van-grid-item>

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
          {{companyList[1].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[1].list"
                       :key='k'
                       @click="addStyle2(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id1 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 民族 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[2].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[2].list"
                       :key='k'
                       @click="addStyle3(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id2 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 婚姻状况 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[3].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[3].list"
                       :key='k'
                       @click="addStyle4(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id3 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 生肖 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[4].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[4].list"
                       :key='k'
                       @click="addStyle5(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id4 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 工作年限 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[5].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[5].list"
                       :key='k'
                       @click="addStyle6(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id5 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 主要技能 -->
    <div>
      <van-cell :border='false'>
        <div slot="title"
             class="title">
          {{companyList[6].title}}
        </div>
      </van-cell>
      <van-grid class="van-matching"
                :column-num="4"
                :gutter="20"
                :border='false'
                :clickable='true'>
        <van-grid-item v-for="(i ,k) in companyList[6].list"
                       :key='k'
                       @click="addStyle7(i,k)">
          <span slot="text"
                class="text "
                :class="{textColor: id6 === i}">{{i}}</span>
        </van-grid-item>

      </van-grid>
      <div class="fold">展开
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 按钮 -->
    <div class="buttons">
      <van-button round
                  type="info"
                  class="button"
                  @click="clear">清除条件</van-button>
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
      // 家服公司智能匹配列表
      companyList: [],
      // 控制样式
      // isShow: false,
      id: '',
      id1: '',
      id2: '',
      id3: '',
      id4: '',
      id5: '',
      id6: ''
    }
  },
  created () {
    this.getCompanyList()
  },

  computed: {},

  methods: {
    // 获取家服公司智能匹配列表
    async getCompanyList () {
      const { data: res } = await this.$axios.get('http://localhost:8080/staff|get')
      console.log('家服公司列表:' + res)
      this.companyList = res.data
    },
    // 添加样式
    addStyle1 (k) {
      // console.log(item.list[k])
      this.id = k
      // this.isShow = !this.isShow
      // this.id = item.list[k]
      // this.isShow = !this.isShow
    },
    addStyle2 (k) {
      this.id1 = k
      // this.isShow = !this.isShow
    },
    addStyle3 (k) {
      this.id2 = k
      // this.isShow = !this.isShow
    },
    addStyle4 (k) {
      this.id3 = k
      // this.isShow = !this.isShow
    },
    addStyle5 (k) {
      this.id4 = k
      // this.isShow = !this.isShow
    },
    addStyle6 (k) {
      this.id5 = k
      // this.isShow = !this.isShow
    },
    addStyle7 (k) {
      this.id6 = k
      // this.isShow = !this.isShow
    },
    // 清除条件
    clear () {
      this.id = this.id1 = this.id2 = this.id3 = this.id4 = this.id5 = this.id6 = ''
    }
  },

  mounted () {},

  watch: {}

}

</script>

<style lang="scss" scoped>
.matching_company-container {
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
  .textColor {
    color: #0000ff;
  }
  .text {
    font-size: 24px;
    white-space: nowrap;
  }
}
</style>
