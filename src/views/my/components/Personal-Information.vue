<template>
  <div class="personal-information">
    <!-- 导航栏 -->
    <van-nav-bar class="nav-top-bar"
                 title="个人资料"
                 left-arrow
                 @click-left="$router.back()" />
    <!-- 个人信息 -->
    <div class="userinfo">
      <input type="file"
             hidden
             ref="file"
             @change="onFileChange">
      <van-cell class="userinfo_img"
                title="头像："
                @click="$refs.file.click()">
        <van-image class="user-img"
                   round
                   fit="cover"
                   :src="infoList.image" />
      </van-cell>

      <van-cell :title="'姓名：'+infoList.name"
                @click="isNameShow=true" />

      <van-cell title="性别："
                :value="infoList.sex===0 ? '男':'女'"
                @click="isProfileGenderShow = true"
                is-link />
      <!-- 手机号码 -->
      <van-cell>
        <van-cell-group>
          <van-field slot="default">
            <span slot="label"
                  class="van-phone">手机号码：</span>
            <span slot="right-icon">{{infoList.mobile}}</span>

          </van-field>
        </van-cell-group>
      </van-cell>
      <van-cell title="服务区域："
                is-link
                :value="infoList.address"
                @click="isDiZhiShow=true" />
      <!-- 详细地址 -->
      <van-cell>
        <van-cell-group>
          <van-field slot="default">
            <span slot="label"
                  class="van-phone">详细地址：</span>
          </van-field>
        </van-cell-group>
      </van-cell>
      <!-- 手验证码 -->
      <van-cell>
        <van-cell-group>

          <van-field slot="default"
                     maxlength="6"
                     type="number">
            <span slot="label"
                  class="van-phone">手验证码：</span>
            <van-count-down :time="1000*60"
                            format="ss s"
                            v-if="isShow"
                            slot="button"
                            @finish="isShow=false" />
            <van-button v-else
                        slot="button"
                        type="primary"
                        size="mini"
                        round
                        icon-position="right"
                        @click="onSendSms">获取验证码</van-button>

          </van-field>

        </van-cell-group>
      </van-cell>
    </div>

    <!-- 编辑姓名的弹出层 -->
    <van-popup v-model="isNameShow"
               position="bottom"
               style="height: 100%">
      <update-name v-if="isNameShow"
                   v-model="infoList.name"
                   @close="isNameShow=false" />
    </van-popup>
    <!-- 编辑头像的弹出层 -->
    <van-popup position="bottom"
               style="height:100%"
               v-model="isImgShow">
      <update-photo :img="img"
                    v-if="isImgShow"
                    @close="isImgShow=false" />

    </van-popup>
    <!-- 编辑性别的弹出层 -->
    <van-popup v-model="isProfileGenderShow"
               position="bottom">
      <van-picker title="性别"
                  :default-index="infoList.sex"
                  v-if="isProfileGenderShow"
                  show-toolbar
                  :columns="columns"
                  @cancel="onCancel"
                  @confirm="onConfirm"
                  @change="onChange" />
    </van-popup>

    <!-- 选择地区的弹出层 -->
    <van-popup v-model="isDiZhiShow"
               position="bottom">
      <van-area title="地区"
                :value="infoList.address"
                :area-list="areaList"
                @cancel="onDiZhiCancel"
                @confirm="onDiZhiConfirm"
                @change="onDiZhiChange" />
    </van-popup>
    <!-- 底部区域 -->
    <!-- <van-nav-bar class="nav-foot-bar"
                 title="保存"
                 @click="editUserInfo" /> -->
    <van-button type="info"
                class="nav-foot-bar"
                size="large"
                @click="editUserInfo">保存</van-button>
  </div>
</template>

<script>
import UpdateName from '@/views/my/components/Update-name'
import UpdatePhoto from '@/views/my/components/Update-photo'
import Area from '@/assets/Area.js'
export default {
  created () {
    this.getUserInfo()
  },
  name: 'PersonalInformation',
  components: {
    UpdateName,
    UpdatePhoto
  },
  data () {
    return {
      areaList: Area,
      isNameShow: false,
      isImgShow: false,
      img: null,
      isProfileGenderShow: false,
      columns: ['男', '女'],
      isDiZhiShow: false,
      // 家服人员信息
      infoList: [],
      jb: null,
      selectList: [],
      isShow: false,
      mobile: null
    }
  },
  methods: {

    onFileChange () {
      // 获取文件对象
      const file = this.$refs.file.files[0]
      // 获取基于文章对象的 blob 数据
      this.img = window.URL.createObjectURL(file)
      console.log(this.img)
      // console.log(data)
      this.isImgShow = true
      // file-input 如果选择同一个文件不会触发change事件，解决办法是每次情空value
      // this.$refs.file.value = ''
    },
    onCancel () {
      this.$toast('取消')
      this.isProfileGenderShow = false
    },
    onDiZhiCancel () {
      this.$toast('取消')
      this.isDiZhiShow = false
    },

    // 获取家政人员基本信息
    async getUserInfo () {
      const { data: res } = await this.$axios.get('http://localhost:8080/userinfo|get')

      console.log('getUserInfo -> res', res)
      if (res.status === 200) {
        this.$toast.success('获取信息成功')
        // console.log(res.datas)
        this.infoList = res.data

        // this.infoList.push(res.datas)

        //
      }
    },

    async onConfirm () {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止点击
        duration: 0// 持续展示
      })
      try {
        this.isProfileGenderShow = false
        this.$toast('保存成功')
      } catch (err) {
        this.$toast('信息更新失败！')
      }
      this.infoList.sex = this.jb
    },
    onChange (picker, value, index) {
      this.jb = index
      console.log(index)
    },
    async onDiZhiConfirm () {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止点击
        duration: 0// 持续展示
      })
      setTimeout(() => {
        const value = this.selectList.join(' ')
        this.infoList.address = value

        this.isDiZhiShow = false
        this.$toast('更改成功')
      }, 1000)
    },
    onDiZhiChange (picker, value, index) {
      this.selectList = []
      value.forEach(item => {
        this.selectList.push(item.name)
      })
    },
    async editUserInfo () {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止点击
        duration: 0// 持续展示
      })
      const data = await this.$axios.post('http://localhost:8080/userinfo', this.infoList)

      console.log(data)
      this.$toast('更改成功')
    },
    async onSendSms () {
      this.isShow = true
      this.mobile = this.infoList.mobile
      try {
        const data = await this.$axios.get('http://ttapi.research.itcast.cn/app/v1_0/sms/codes/' + this.mobile)
        this.$toast('发送成功')
        console.log(111)
        console.log(data)
      } catch (err) {
        this.isShow = false
        if (err.data.status === 429) {
          this.$toast('发送的太频繁，请稍后重试！')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.personal-information {
  background-color: #f8f8f8;
  .nav-top-bar {
    left: 0px;
    width: 100%;
    height: 128px;
    line-height: 40px;
    background-color: rgba(63, 81, 181, 100);
    border: 1px solid rgba(255, 255, 255, 100);

    ::v-deep .van-nav-bar__title {
      color: rgba(255, 255, 255, 100);
      font-size: 32px;
      text-align: center;
      margin-left: 72px;
      font-family: PingFangSC-bold;
    }

    ::v-deep .van-icon {
      color: #fff;
      font-size: 36px;
      margin-top: 10px;
    }
  }
  .userinfo {
    margin-top: 34px;

    border-bottom: 1px solid #f0eeee;
    .van-cell__title {
      color: #101010;
      font-size: 26px;
      font-weight: 700;
    }

    .userinfo_img {
      height: 162px;
      line-height: 150px;
      .user-img {
        width: 110px;
        height: 108px;
      }
    }
    .van-field {
      padding: 0;
      .van-phone {
        color: #101010;
        font-size: 26px;
        font-weight: 700;
      }
    }
  }
  .nav-foot-bar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background-color: rgba(63, 81, 181, 100);
    border: 1px solid rgba(255, 255, 255, 100);
    ::v-deep .van-nav-bar__title {
      color: rgba(255, 255, 255, 100);
      font-size: 32px;
      text-align: center;
      font-family: PingFangSC-bold;
    }
  }
}
</style>
