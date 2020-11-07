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
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-cell>

      <van-cell title="姓名："
                @click="isNameShow=true" />

      <van-cell title="性别："
                value="内容"
                @click="isProfileGenderShow = true"
                is-link />
      <van-cell title="手机号码：" />
      <van-cell title="服务区域："
                value="内容"
                is-link />
      <van-cell title="详细地址：" />
      <van-cell title="手验证码：" />
    </div>

    <!-- 编辑姓名的弹出层 -->
    <van-popup v-model="isNameShow"
               position="bottom"
               style="height: 100%">
      <update-name v-if="isNameShow"
                   @close="isNameShow=false" />
    </van-popup>
    <!-- 编辑头像的弹出层 -->
    <van-popup :img="img"
               position="bottom"
               style="height:100%"
               v-model="isImgShow">
      <update-photo :img="img"
                    v-if="isImgShow"
                    @close="isImgShow=false" />

    </van-popup>
    <!-- 编辑性别的弹出层 -->
    <van-popup v-model="isProfileGenderShow"
               position="bottom">
      <van-picker title="标题"
                  v-if="isProfileGenderShow"
                  show-toolbar
                  :columns="columns"
                  @cancel="onCancel" />
    </van-popup>
  </div>
</template>

<script>
import UpdateName from '@/views/my/components/Update-name'
import UpdatePhoto from '@/views/my/components/Update-photo'

export default {
  name: 'PersonalInformation',
  data () {
    return {

      isNameShow: false,
      isImgShow: false,
      img: null,
      isProfileGenderShow: false,
      columns: ['男', '女']
    }
  },
  methods: {

    onFileChange () {
      // 获取文件对象
      const file = this.$refs.file.files[0]
      // 获取基于文章对象的 blob 数据
      this.img = window.URL.createObjectURL(file)
      // console.log(data)

      this.isImgShow = true
      // file-input 如果选择同一个文件不会触发change事件，解决办法是每次情空value
      // this.$refs.file.value = ''
    },
    onCancel () {
      this.$toast('取消')
      this.isProfileGenderShow = false
    }
  },
  components: { UpdateName, UpdatePhoto }
}
</script>

<style lang="scss" scoped>
.personal-information {
  background-color: #f8f8f8;
  .nav-top-bar {
    left: 0px;
    top: 38px;
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
  }
}
</style>
