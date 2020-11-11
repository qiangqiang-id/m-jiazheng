import housekeepingList from '@/components/housekeepingList';
<template>
  <div class="housekeepingInfo"
       ref="housekeepingInfoRef">
    <van-nav-bar left-text="家政平台"
                 left-arrow
                 @click-left='$router.push("/home")' />
    <div class="box">
      <div class="infobox">
        <div class="top">
          <van-image :src="info.img" />
          <div class="userinfo">
            <div class="user">{{info.name}}</div>
            <van-tag plain
                     round
                     type="primary">{{info.label}}</van-tag>
            <span class="textcol">{{info.address}} | {{info.age}} | {{info.experience}}</span>
          </div>
          <van-button type="info"
                      v-if="attention"
                      class="attention"
                      @click="attentionClick"
                      round>已关注</van-button>
          <van-button type="info"
                      v-else
                      @click="attentionClick"
                      round>关注</van-button>
        </div>
        <span class="text">注册公司：{{info.is_company}}</span>
        <div class="text">职业：{{info.profession}}</div>
        <div class="bottom">
          <div class="bottom-left">
            <div slot="icon"
                 class="icon-antFill-safety-certificate housekeeping"></div>
            <span>身份信息已核实</span>
          </div>
          <div class="bottom-right">
            <van-button type="info"
                        @click="phoneShow=true"
                        round
                        plain>电话联系</van-button>
            <van-button type="info"
                        round
                        @click="wechatShow=true"
                        plain>微信联系</van-button>
          </div>
        </div>
      </div>
      <div class="skillbox">
        <div class="mainskill">
          <span>主要技能</span>
        </div>
        <div class="skill">
          <van-tag plain
                   round
                   v-for="(item,index) in info.skill"
                   :key="index"
                   type="primary">{{item}}</van-tag>
        </div>
        <div class="perinfo">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="个人简介"
                               name="1">{{info.intro}}</van-collapse-item>
          </van-collapse>
        </div>
        <div class="perinfo">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="个人简介"
                               name="2">
              <div class="info">
                <span>任职公司：{{info.be_company}}</span>
                <span>籍贯民族：{{info.nation}}</span>
                <span>生肖属相：{{info.culture}}</span>
                <span>星座：{{info.constellation}}</span>
                <span>出生日期：{{info.born}}</span>
                <span>学历：{{info.education}}</span>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="perinfo">
          <span>证件信息</span>
        </div>
        <div class="information">
          <van-image fit="cover"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <van-image fit="cover"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <van-image fit="cover"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>

    </div>

    <div class="footer">
      <van-grid>
        <van-grid-item text="评价"
                       @click="showAppraise=true">
          <div slot="icon"
               class="icon-md-textsms housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="分享"
                       @click="showShare=true">
          <div slot="icon"
               class="icon-fasfa-share-alt-square housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="微信联系"
                       @click="wechatShow=true">
          <div slot="icon"
               class="icon-weixin housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="电话联系"
                       @click="phoneShow=true">
          <div slot="icon"
               class="icon-fasfa-phoneCopy1 housekeeping"></div>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 电话号码弹出层 -->
    <van-popup v-model="phoneShow"
               class="phoneShowBox"
               position="bottom"
               :style="{ height: '24%' }">
      <van-picker title="电话号码"
                  show-toolbar
                  item-height="9px"
                  :columns="columns" />
      <div class="btn-cancel">
        <van-button @click="phoneShow=false">取消</van-button>
      </div>
    </van-popup>
    <!-- 微信弹出层 -->
    <van-popup v-model="wechatShow"
               class="phoneShowBox"
               position="bottom"
               :style="{ height: '24%' }">
      <van-picker title="微信"
                  show-toolbar
                  item-height="9px"
                  :columns="WeChatList" />
      <div class="btn-cancel">
        <van-button @click="wechatShow=false">取消</van-button>
      </div>
    </van-popup>
    <!-- 分享弹出层 -->
    <van-share-sheet v-model="showShare"
                     title="立即分享给好友"
                     :options="options" />
    <!-- 评价弹出层 -->
    <van-popup v-model="showAppraise"
               position="bottom"
               class="Appraise">
      <van-field v-model="message"
                 rows="2"
                 autosize
                 type="textarea"
                 maxlength="50"
                 clearable
                 placeholder="请输入评价"
                 show-word-limit />
      <van-button type="info">发送</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'HousekeepingInfo',
  props: {
    housekeepingID: String
  },
  data () {
    return {
      info: {},
      phoneShow: false,
      wechatShow: false,
      attention: false,
      columns: [],
      WeChatList: [],
      activeNames: ['1', '2'],
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }

        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]
      ],
      showAppraise: false,
      message: ''
    }
  },
  methods: {
    async getUserInfo () {
      const { data: res } = await this.$axios.get(`http://localhost:8080/matronInfo/${this.housekeepingID}`)
      this.info = res.data
      this.columns.push(res.data.phone)
      this.WeChatList.push(res.data.wechat)
    },
    attentionClick () {
      this.$toast.loading({
        message: '请稍后...',
        forbidClick: true, // 禁止背景点击
        duration: 0// 展示时长(ms)，值为 0 时，toast 不会消失
      })
      if (this.attention) {
        // 已关注 点击取消关注
        setTimeout(() => {
          this.$toast('取消关注成功')
          this.attention = !this.attention
        }, 500)
      } else {
        // 添加关注
        setTimeout(() => {
          this.$toast('关注成功')
          this.attention = !this.attention
        }, Math.floor(Math.random() * (1000 - 0)) + 0)
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
.housekeepingInfo {
  ::v-deep.van-share-sheet__option {
    flex: 1;
  }
  .Appraise {
    display: flex;
    align-items: center;
    padding: 10px;
    .van-button {
      width: 140px;
      margin-right: 20px;
    }
  }
  background-color: #f8f8f8;
  ::v-deep.van-nav-bar {
    height: 180px;
    background-color: #3f51b5;
    .van-nav-bar__text {
      color: #fff;
    }
    .van-icon-arrow-left {
      color: #fff;
      margin-top: 5px;
    }
    .van-nav-bar__left {
      position: absolute;
      top: 40px;
      align-items: unset;
    }
  }
  .box {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow-y: auto;
    margin-bottom: 200px;
  }
  .infobox {
    z-index: 99;
    background-color: #fff;
    width: 90%;
    margin-left: 5%;
    padding: 15px;
    box-sizing: border-box;
    .top {
      .van-button {
        width: 150px;
        height: 50px;
        background-color: #3f51b5;
      }
      .attention {
        background-color: #999;
        border: 1px solid #999;
      }
      display: flex;
      justify-content: space-between;
      .van-image {
        width: 140px;
        height: 140px;
      }
      .userinfo {
        display: flex;
        flex-direction: column;
        margin-left: -60px;
        height: 140px;
        justify-content: space-between;
        div {
          font-size: 30px;
        }
        .van-tag {
          width: 140px;
          height: 40px;
          display: block;
          text-align: center;
          line-height: 43px;
        }
        .textcol {
          font-size: 20px;
          color: #979191;
        }
      }
    }
    .text {
      font-size: 24px;
      color: #979191;
      margin-top: 20px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .bottom-left {
        display: flex;
        align-items: center;
        .housekeeping {
          font-size: 30px;
          color: #3f51b5;
          margin-right: 10px;
        }
        span {
          font-size: 30px;
        }
      }
      .bottom-right {
        display: flex;
        flex-direction: column;
        .van-button {
          width: 160px;
          height: 50px;
          font-size: 24px;
          color: #3f51b5;
          border: 1px solid #3f51b5;
          &:last-child {
            margin-top: 15px;
          }
        }
      }
    }
  }
  .skillbox {
    width: 90%;
    margin-left: 5%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    .perinfo {
      font-size: 30px;
      margin-top: 20px;
      ::v-deep.van-cell {
        padding-left: 0;
      }
      ::v-deep.van-cell__title {
        font-size: 30px;
        padding-left: 10px;
        border-left: 15px solid #3f51b5;
      }
      .van-icon {
        margin: 10px 40px 0 0;
      }
    }
    .mainskill {
      font-size: 30px;
      border-left: 15px solid #3f51b5;
      padding-left: 15px;
    }
    .skill {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 20px 30px;
      .van-tag {
        display: block;
        height: 50px;
        padding: 0 30px;
        margin-top: 10px;
        text-align: center;
        line-height: 50px;
      }
    }
    .perinfotext {
      font-size: 25px;
      padding: 10px 30px;
      color: #7b7777;
    }
    .info {
      display: flex;
      flex-direction: column;
      font-size: 25px;
      color: #7b7777;
    }
    .information {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      .van-image {
        width: 230px;
        height: 220px;
        margin-bottom: 40px;
        &:nth-child(2) {
          margin: 0 5px;
        }
      }
    }
  }
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    .housekeeping {
      font-size: 50px;
    }
  }
  .phoneShowBox {
    background-color: transparent;
    width: 95%;
    margin-left: 2.5%;
    ::v-deep.van-picker {
      // height: 200px;
      border-radius: 20px;
      overflow: hidden;
      .van-picker__confirm {
        display: none;
      }
      .van-picker__cancel {
        display: none;
      }
      .van-picker__title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .btn-cancel {
      margin-bottom: 20px;
      .van-button {
        margin-top: 15px;
        width: 100%;
        border: 0;
        border-radius: 20px;
        color: #333;
        font-size: 30px;
      }
    }
  }
}
</style>
