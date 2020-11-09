import mockjs from 'mockjs'

var Random = mockjs.Random
// 模拟手机号码
mockjs.mobile_prefix = ['134', '135', '136', '137', '138', '139', '150', '151',
  '152', '157', '158', '159', '130', '131', '132', '155', '156', '133', '153']

mockjs.numeric = '0123456789'

mockjs.random = function (len, list) {
  if (len <= 1) { len = 1 }
  var s = ''
  var n = list.length
  if (typeof list === 'string') {
    while (len-- > 0) {
      s += list.charAt(Math.random() * n)
    }
  } else if (list instanceof Array) {
    while (len-- > 0) {
      s += list[Math.floor(Math.random() * n)]
    }
  }
  return s
}
mockjs.getMobile = function () {
  return mockjs.random(1, mockjs.mobile_prefix) +
    mockjs.random(8, mockjs.numeric)
}
// 模拟手机号码
const type = []
const pic1 = ['//s1.ayibang.com/static/h5/6.1/css/img/BM_rcbj_015da9a.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_yyss_76a2c75.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_cwkh_6035b37.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_xyyt_6fb2c30.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_zglr_ef31f34.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_bbhl_d90cfba.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_rcbj_015da9a.jpg', '//s1.ayibang.com/static/h5/6.1/css/img/BM_cwkh_6035b37.jpg']
const text = ['保姆', '月嫂', '厨师', '育婴师', '产康师', '家装/搬家', '早教/托教', '养老/陪护', '保洁/清洗']
for (var i = 0; i < 8; i++) {
  type.push({
    id: i,
    text: text[i],
    pic: pic1[i]
  })
}
// 服务人员基本信息
const datas = []
var k = 10
for (let i = 0; i < k; i++) {
  datas.push({
    // id: k,
    // 性别 0为女性 1为男性
    sex: Math.round(Math.random()),
    id: i,
    name: Random.cname(),
    // 手机号码
    mobile: mockjs.getMobile(),
    // 工作经验
    age: Random.natural(30, 50),
    // 保姆年龄
    experience: Random.natural(1, 8),
    // 随机地址
    address: Random.city(true),
    price: Math.ceil(Math.random() * 10) * 1000,
    // 服务几户
    service: Random.natural(20, 200),
    // 评价
    profession: text,
    // 职业大全
    evaluate: Random.natural(1, 2000),
    // 标签
    label: [Random.natural(1, 8) + '星育婴师', Random.natural(1, 8) + '年工作经验', Random.ctitle(3, 5)]

  })
}
// 家服公司基本信息
const companyMsg = []
for (let i = 0; i < 10; i++) {
  companyMsg.push({
    id: i,
    profession: text,
    // 职业大全
    shopAddress: Random.city(true) + ' 东方红县 夹皮沟404号', // 随机生成地址
    companyName: Random.ctitle(3, 5) + '家政有限公司', // 公司名
    evaluate: ['服务好', '客户至上', '巴拉巴拉'], // 评价
    distance: Random.float(5, 30, 1, 2) + 'km' // 距离

  })
}
// 轮播图
const bannerPic = ['//s1.ayibang.com/static/h5/6.1/css/img/rcbjimg1_e668551.png',
  '//s1.ayibang.com/static/h5/6.1/css/img/rcbjnew1_a8f95a0.png',
  '//s1.ayibang.com/static/h5/6.1/css/img/yes8_e7641e5.jpg']
export default {
  'http://localhost:8080/type|get': options => {
    return {
      status: 200,
      type: type
    }
  },
  'http://localhost:8080/data|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      datas
    }
  },
  'http://localhost:8080/info|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: companyMsg
    }
  },
  'http://localhost:8080/banner|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: bannerPic
    }
  }

}
