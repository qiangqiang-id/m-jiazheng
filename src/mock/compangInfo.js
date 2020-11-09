import MockJS from 'mockjs'
const Random = MockJS.Random
const num1 = MockJS.mock({
  'number|1-1000': 1000
})
const num2 = MockJS.mock({
  'number|1-1000': 1000
})
// 公司名称
var companyName = Random.ctitle(3, 5)
const name = MockJS.mock({
  name: '@cname'
})
let follow = true
export default {
  'http://localhost:8080/test|get': options => {
    return {
      banner: '//s1.ayibang.com/static/h5/6.1/css/img/bannerbm_7c57ace.jpg',
      num1: num1.number,
      num2: num2.number,
      is_follow: follow,
      // 业务范围
      business: ['月嫂', '育婴师', '保姆'],
      compang_pic: {
        // 公司资质
        details: {
          name: '公司资质',
          picPath: ['//s1.ayibang.com/static/h5/6.1/css/img/hdb/banner_05d6a2b.png', '//s1.ayibang.com/static/h5/6.1/css/img/gdstimg1_b41f803.png', '//s1.ayibang.com/static/h5/6.1/css/img/img1_99f039a.png']
        },
        // 办公环境
        environment: {
          name: '办公环境',
          picPath: ['//s1.ayibang.com/static/h5/6.1/css/img/hdb/banner_05d6a2b.png', '//s1.ayibang.com/static/h5/6.1/css/img/gdstimg1_b41f803.png', '//s1.ayibang.com/static/h5/6.1/css/img/img1_99f039a.png']
        },
        // 获取荣誉
        honor: {
          name: '获取荣誉',
          picPath: ['//s1.ayibang.com/static/h5/6.1/css/img/hdb/banner_05d6a2b.png', '//s1.ayibang.com/static/h5/6.1/css/img/gdstimg1_b41f803.png', '//s1.ayibang.com/static/h5/6.1/css/img/img1_99f039a.png']
        },
        style: {
          name: '团队风采',
          picPath: ['//s1.ayibang.com/static/h5/6.1/css/img/hdb/banner_05d6a2b.png', '//s1.ayibang.com/static/h5/6.1/css/img/gdstimg1_b41f803.png', '//s1.ayibang.com/static/h5/6.1/css/img/img1_99f039a.png']
        }
      },
      company_name: companyName + '家政有限公司',
      // 代表
      representative: name.name,
      // 规模
      scale: '200人以下',
      mobile: 13011011010,
      address: Random.city(true) + '东方红县 夹皮沟404号',
      // 介绍
      intorduce: companyName + '家政有限公司,一站式互联网家政服务平台！2013年8月创立，五年，坚持家政阿姨高准入标准，严格把控家政服务质量，一直以更高品质的服务质量为奋斗目标。截至目前，阿姨帮平台已覆盖北京、上海、广州、深圳、杭州、成都、南京等80多个城市。用户可以使用阿姨帮手机App在线预约包括上门保洁、家电清洗、保姆月嫂、家居保养、搬家、维修安装、除甲醛等家政服务。阿姨帮凭借“订单智能调度系统”，有效提高了家政员及第三方商家的服务效率；方便客户使用阿姨帮App快速匹配到合适的阿姨或其他商家。平台还通过自主创新研发的“家政服务品控系统”，严选优质家政阿姨、严格跟进每一个订单，为客户提供更高品质的家政服务！'
    }
  },
  'http://localhost:8080/is_follow|put': options => {
    follow = JSON.parse(options.body).is_follow
    return {
      status: 200,
      msg: '修改成功'
    }
  }

}
