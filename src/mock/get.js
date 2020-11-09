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
for (var i = 0; i < 8; i++) {
  type.push({
    id: i,
    text: '月嫂' + i

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
    profession: ['保姆', '月嫂', '厨师', '育婴师', '产康师', '家装/搬家', '早教/托教', '养老/陪护', '保洁/清洗'],
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
    profession: ['保姆', '月嫂', '厨师', '育婴师', '产康师', '家装/搬家', '早教/托教', '养老/陪护', '保洁/清洗'],
    // 职业大全
    shopAddress: Random.city(true) + ' 东方红县 夹皮沟404号', // 随机生成地址
    companyName: Random.ctitle(3, 5) + '家政有限公司', // 公司名
    evaluate: ['服务好', '客户至上', '巴拉巴拉'], // 评价
    distance: Random.float(5, 30, 1, 2) + 'km' // 距离

  })
}

// 入住商务部信息
var register = {
  faRemVal: '个人企业', // 法人类型下拉框
  enterprise: '龙头大亨', // 企业名称
  displayName: '哇哈哈', // 显示名称
  bankCard: '888888888888888888', // 社会卡号
  showDay: '2001-10-19', // 工商注册时间
  capital: '888', // 注册资本
  address: '北京市北京市房山区', // 注册地区
  enterpriseValue: '请选择', // 企业类型
  management: ['月嫂', '育婴师', '保洁/清洗', '保姆', '早教/托', '养老/陪护', '家装/搬家', '产康师']
}

// 家政服务
var jobWanted = {
  name: '张三',
  mobile: '13678987612',
  intended: ['月嫂', '育婴师', '保洁/清洗', '保姆', '早教/托', '养老/陪护', '家装/搬家', '产康师'],
  certificate: ['月嫂', '育婴师', '小儿推拿', '保姆', '保育员证'],
  NativePlace: '唐朝', // 籍贯
  CurrentAddress: '北京房区', // 现居地址
  company: '请选择', // 意向家政公司
  remarks: '123888' // 备注信息
}

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
  'http://localhost:8080/register|get': option => { // 入住商务部
    return {
      status: 200,
      msg: '获取信息成功',
      register
    }
  },
  'http://localhost:8080/register|post': options => { // 入住商务部
    register = JSON.parse(options.body)
    return {
      status: 200,
      msg: '保存信息成功',
      register: JSON.parse(options.body)
    }
  },
  'http://localhost:8080/jobWanted|get': options => { // 家政求职
    return {
      status: 200,
      msg: '获取信息成功',
      jobWanted
    }
  },
  'http://localhost:8080/jobWanted|post': option => {
    jobWanted = JSON.parse(option.body)
    return {
      status: 200,
      msg: '保存成功',
      jobWanted: JSON.parse(option.body)
    }
  }

}
