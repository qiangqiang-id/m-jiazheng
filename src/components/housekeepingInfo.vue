<template>
  <div class="housekeepingInfo">
    <van-nav-bar left-text="家政平台"
                 left-arrow
                 @click-left='$router.push("/home")' />
    <div class="infobox">
      <div class="top">
        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="userinfo">
          <div class="user">张丽丽</div>
          <van-tag plain
                   round
                   type="primary">二星育婴师</van-tag>
          <span class="textcol">湖南长沙 | 46岁 | 7年经验</span>
        </div>
        <van-button type="info"
                    round>关注</van-button>
      </div>
      <span class="text">注册公司：湖南前海优家网络科技有限公司</span>
      <div class="text">职业：保姆 月嫂 育婴师 早教/托育</div>
      <div class="bottom">
        <div class="bottom-left">
          <div slot="icon"
               class="icon-antFill-safety-certificate housekeeping"></div>
          <span>身份信息已核实</span>
        </div>
        <div class="bottom-right">
          <van-button type="info"
                      round
                      plain>电话联系</van-button>
          <van-button type="info"
                      round
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
                 v-for="(item,index) in skillList"
                 :key="index"
                 type="primary">{{item}}</van-tag>
      </div>
      <div class="perinfo">
        <span>个人简介</span>
        <van-icon name="arrow-up" />
      </div>
      <div class="perinfotext">2019年8月在湖南女子学院优家培训平台以优异的成绩，
        荣获中级育婴结业证书，并获得被动操和实操能手荣誉证书。参加国家职业资格证考试，获得国家职业资格证书育婴员证，会做精致的辅食，婴儿常见疾病的护理，宝宝哄睡，以及良好的生活习惯。擅长科学育儿，会新生儿的黄疸辩证和护理，会脐带消毒和护理，臀部护理，洗澡抚触，婴儿主被动操，穿脱衣服，做简单早教。其他技能：亲和力非常不错，形象气质很好，积极主动，能很好的与他人沟通，做事细心，勤快，有耐心，敬业，能吃苦。
        普通话标准，有爱心，曾在私塾教书2年，对胎婴幼儿教育有一定的认识。有带过一个1岁左右的女宝宝到3岁多上幼儿园的经验，做饭菜好吃，可以兼做饭菜，家务。</div>
      <div class="perinfo">
        <span>个人简介</span>
        <van-icon name="arrow-up" />
      </div>
      <div class="info">
        <span>任职公司：湖南前海优家网络科技有限公司</span>
        <span>籍贯民族：汉族</span>
        <span>生肖属相：蛇</span>
        <span>星座：摩蝎座 (12.22~1.19)</span>
        <span>出生日期：1997-12-23</span>
        <span>学历：中专</span>
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
    <div class="footer">
      <van-grid>
        <van-grid-item text="评价">
          <div slot="icon"
               class="icon-md-textsms housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="分享">
          <div slot="icon"
               class="icon-fasfa-share-alt-square housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="微信联系">
          <div slot="icon"
               class="icon-weixin housekeeping"></div>
        </van-grid-item>
        <van-grid-item text="电话联系">
          <div slot="icon"
               class="icon-fasfa-phoneCopy1 housekeeping"></div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skillList: ['做饭', '月子餐', '家庭保洁', '洗衣', '育婴护理', '小孩看管', '家教辅导']
    }
  }
}
</script>

<style lang="scss" scoped>
.housekeepingInfo {
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
  .infobox {
    position: absolute;
    top: 120px;
    left: 5%;
    z-index: 99;
    background-color: #fff;
    width: 90%;
    padding: 15px;
    box-sizing: border-box;
    .top {
      .van-button {
        width: 140px;
        height: 50px;
        background-color: #3f51b5;
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
    margin-top: 360px;
    width: 90%;
    margin-left: 5%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    .perinfo {
      font-size: 30px;
      border-left: 15px solid #3f51b5;
      padding-left: 15px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
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
      padding: 10px 30px;
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
    margin-top: 50px;
    .housekeeping {
      font-size: 50px;
    }
  }
}
</style>
