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
    // 性别 0为女性 1为男性
    sex: Math.round(Math.random()),
    id: i,
    // 随机生成一个常见的中文姓名
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
    label: [Random.natural(1, 8) + '星育婴师', Random.natural(1, 8) + '年工作经验', Random.ctitle(3, 5)],
    // 生成一段随机的Base64 图片编码
    image: Random.dataImage()

  })
}

// 月嫂1信息详情
const matronInfo1 = {
  name: '张丽丽',
  img: 'https://beijing.198526.com/baomuimages/images/198526-5bd71b0762614.jpg',
  // 标签
  label: '三星保姆',
  age: '43岁',
  address: '四川攀枝花',
  experience: '6年经验',
  // 是否关注 0未关注  1关注
  attention: 0,
  // 注册公司
  is_company: '湖南前海优家网络科技有限公司',
  // 职业
  profession: '保姆 月嫂 育婴师',
  phone: '13970444583',
  wechat: '13970444583',
  // 技能
  skill: ['做饭', '月子餐', '早教', '洗衣', '育婴护理', '营养餐', '家教辅导'],
  // 任职公司
  be_company: '广州你瞅啥科技有限公司',
  // 民族
  nation: '苗族',
  // 生肖
  culture: '虎',
  // 星座
  constellation: '魔蝎座(12.22~1.19)',
  born: '1979-12-26',
  education: '中专',
  // 个人简介
  intro: '2019年8月在湖南女子学院优家培训平台以优异的成绩，荣获中级育婴结业证书，并获得被动操和实操能手荣誉证书。参加国家职业资格证考试，获得国家职业资格证书育婴员证，会做精致的辅食，婴儿常见疾病的护理，宝宝哄睡，以及良好的生活习惯。擅长科学育儿，会新生儿的黄疸辩证和护理，会脐带消毒和护理，臀部护理，洗澡抚触，婴儿主被动操，穿脱衣服，做简单早教。其他技能：亲和力非常不错，形象气质很好，积极主动，能很好的与他人沟通，做事细心，勤快，有耐心，敬业，能吃苦。普通话标准，有爱心，曾在私塾教书2年，对胎婴幼儿教育有一定的认识。有带过一个1岁左右的女宝宝到3岁多上幼儿园的经验，做饭菜好吃，可以兼做饭菜，家务。'
}

// 月嫂2信息详情
const matronInfo2 = {
  name: '李月娥',
  img: 'https://beijing.198526.com/baomuimages/images/198526-5bd71ab431760.jpg',
  // 标签
  label: '三星厨师',
  age: '39岁',
  address: '上海浦东',
  experience: '7年经验',
  // 是否关注 0未关注  1关注
  attention: 0,
  // 注册公司
  is_company: '上海名媛科技有限公司',
  // 职业
  profession: '保姆 月嫂 厨师',
  phone: '18647448656',
  wechat: '13970444583',
  // 技能
  skill: ['做饭', '月子餐', '保洁', '做饭', '育婴护理', '熨衣服', '家教辅导'],
  // 任职公司
  be_company: '湖南前海优家网络科技有限公司',
  // 民族
  nation: '朝鲜族',
  // 生肖
  culture: '牛',
  // 星座
  constellation: '魔蝎座(12.22~1.19)',
  born: '1979-12-26',
  education: '中专',
  // 个人简介
  intro: '2019年8月在湖南女子学院优家培训平台以优异的成绩，荣获中级育婴结业证书，并获得被动操和实操能手荣誉证书。参加国家职业资格证考试，获得国家职业资格证书育婴员证，会做精致的辅食，婴儿常见疾病的护理，宝宝哄睡，以及良好的生活习惯。擅长科学育儿，会新生儿的黄疸辩证和护理，会脐带消毒和护理，臀部护理，洗澡抚触，婴儿主被动操，穿脱衣服，做简单早教。其他技能：亲和力非常不错，形象气质很好，积极主动，能很好的与他人沟通，做事细心，勤快，有耐心，敬业，能吃苦。普通话标准，有爱心，曾在私塾教书2年，对胎婴幼儿教育有一定的认识。有带过一个1岁左右的女宝宝到3岁多上幼儿园的经验，做饭菜好吃，可以兼做饭菜，家务。'
}

// 月嫂3信息详情
const matronInfo3 = {
  name: '顾婷婷',
  img: 'https://beijing.198526.com/baomuimages/images/198526-5bd71cf3c2f0d.jpg',
  // 标签
  label: '三星保姆',
  age: '41岁',
  address: '四川攀枝花',
  experience: '5年经验',
  // 是否关注 0未关注  1关注
  attention: 0,
  // 注册公司
  is_company: '湖南前海优家网络科技有限公司',
  // 职业
  profession: '保姆 月嫂 育婴师',
  phone: '13970444583',
  wechat: '13970444583',
  // 技能
  skill: ['做饭', '月子餐', '家庭保洁', '洗衣', '育婴护理', '小孩看管', '家教辅导'],
  // 任职公司
  be_company: '湖南前海优家网络科技有限公司',
  // 民族
  nation: '汉族',
  // 生肖
  culture: '蛇',
  // 星座
  constellation: '魔蝎座(12.22~1.19)',
  born: '1974-08-26',
  education: '大专',
  // 个人简介
  intro: '2019年8月在湖南女子学院优家培训平台以优异的成绩，荣获中级育婴结业证书，并获得被动操和实操能手荣誉证书。参加国家职业资格证考试，获得国家职业资格证书育婴员证，会做精致的辅食，婴儿常见疾病的护理，宝宝哄睡，以及良好的生活习惯。擅长科学育儿，会新生儿的黄疸辩证和护理，会脐带消毒和护理，臀部护理，洗澡抚触，婴儿主被动操，穿脱衣服，做简单早教。其他技能：亲和力非常不错，形象气质很好，积极主动，能很好的与他人沟通，做事细心，勤快，有耐心，敬业，能吃苦。普通话标准，有爱心，曾在私塾教书2年，对胎婴幼儿教育有一定的认识。有带过一个1岁左右的女宝宝到3岁多上幼儿园的经验，做饭菜好吃，可以兼做饭菜，家务。'
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

// 服务人员个人信息
const userInfo = {
  // 随机生成一个常见的中文姓名
  name: Random.cname(),
  // 随机地址
  address: Random.city(true),
  // 生成随机的 图片
  image: Random.image('200x100', '#fb0a2a'),
  // 手机号码
  mobile: mockjs.getMobile(),
  // 随机生成0或1
  sex: Random.integer(0, 1)
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
  'http://localhost:8080/matronInfo|get': options => {
    const i = options.url.substr(options.url.length - 1, 1)
    var matronInfo = null
    if (i === '1') {
      matronInfo = matronInfo1
    } else if (i === '2') {
      matronInfo = matronInfo2
    } else if (i === '3') {
      matronInfo = matronInfo3
    }
    return {
      status: 200,
      msg: '获取信息成功',
      data: matronInfo
    }
  },
  'http://localhost:8080/userinfo|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: userInfo
    }
  }
}
