
<template>
  <div>
    <form action="/">
      <van-search v-model.trim="searchText"
        class="inputs"
        :clearable='true'
        show-action
        @blur='onBlur'
        @search="onSearch"
        @focus='isSearchHistoriesShow=true'
        placeholder="智能匹配">
        <div slot="action">
          <div class="city"
            @click="isUpCityNameshow=true">{{city}}
            <i class="housekeeping icon-jiantou-down"></i>
          </div>
        </div>
      </van-search>
    </form>
    <!-- 编辑地址 -->
    <van-popup v-model="isUpCityNameshow"
      position="bottom">
      <van-picker title="选择城市"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel" />
    </van-popup>
    <!-- /编辑地址 -->
    <!-- 历史记录 -->

    <div v-show="isSearchHistoriesShow">
      <van-cell title="搜索历史"
        slot="title"
        v-show="isSearchHistoriesShow">
        <div v-if="isDeleteShow">
          <span @click="searchHistories=[]">全部删除 </span>&nbsp;&nbsp;
          <span @click="isDeleteShow=false"> 完成</span>
        </div>

        <van-icon v-else
          name="delete"
          @click="isDeleteShow=true" />
      </van-cell>
      <van-cell :title="item"
        v-for="(item,index) in searchHistories"
        :key="index"
        @click="onSearchItemClick(item,index)">
        <van-icon v-if="isDeleteShow"
          name="close" />
      </van-cell>
    </div>
    <!-- /历史记录 -->
  </div>
</template>

<script>
import { setItem, getItem } from '@/components/storage'
export default {
  name: 'CityInquire',
  data () {
    return {
      // 搜索框内容
      searchText: '',
      // 选择城市的名字
      isUpCityNameshow: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州', '长沙'],
      // 城市
      city: '',
      // 搜索的历史记录
      searchHistories: getItem('liShiJiLu') || [],
      // 控制历史记录的显示与隐藏
      isSearchHistoriesShow: false,
      // 控制删除图标的显示和隐藏
      isDeleteShow: false
    }
  },
  created () {
    this.city = localStorage.getItem('chengShi') || '长沙'
  },
  watch: {
    searchHistories (value) {
      console.log(value)
      setItem('liShiJiLu', value)
    }

    // 完整写法
    // searchHistories: {
    //   handler () {}
    // }
  },
  methods: {
    onConfirm (value, index) {
      // setItem('chengShi', value)
      // this.city = sessionStorage.getItem('chengShi')
      localStorage.setItem('chengShi', value)
      this.city = localStorage.getItem('chengShi')

      this.isUpCityNameshow = false
    },

    onCancel () {
      this.isUpCityNameshow = false
    },
    // 显示历史记录
    onSearch (val) {
      // console.log(val)
      this.searchText = ''
      // 存储搜索历史记录
      if (val !== '') {
        const index = this.searchHistories.indexOf(val)
        if (index !== -1) {
          this.searchHistories.splice(index, 1)
        }
        this.searchHistories.unshift(val)
        // 关闭历史记录
        this.isSearchHistoriesShow = false
      }
    },
    onBlur () {
    },

    // 删除历史记录
    onSearchItemClick (item, index) {
      if (this.isDeleteShow) {
        // 删除历史记录
        this.searchHistories.splice(index, 1)
      } else {
        // 直接搜索
        this.searchText = item
        this.isSearchHistoriesShow = false
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.inputs {
  border-top: 1px solid#3f51b5;
  background-color: #3f51b5;
  .city {
    color: #fff;
  }
}
</style>
