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

// 需求岗位

var demandJobs = {
  mobile: '',
  age: '',
  pay: '',
  home: '',
  username: '',
  address: '',
  jobs: [{ profession: '保姆', active: false }, { profession: '月嫂', active: false }, { profession: '厨师', active: false }, { profession: '育婴师', active: false }, { profession: '产康师', active: false }, { profession: '家装/搬家', active: false }, { profession: '早教/托教', active: false }, { profession: '养老/陪护', active: false }]
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
  'http://localhost:8080/look|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      demandJobs
    }
  },
  'http://localhost:8080/look|post': options => {
    console.log(options)
    demandJobs = JSON.parse(options.body)
    return {
      status: 200,
      msg: '获取信息成功',
      demandJobs
    }
  }
}
