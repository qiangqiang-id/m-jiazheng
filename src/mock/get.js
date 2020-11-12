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
    profession: text,
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

const matronInfo4 = {
  name: Random.cname(),
  img: 'https://beijing.198526.com/baomuimages/images/198526-5bd71cf3c2f0d.jpg',
  // 标签
  label: '三星保姆',
  age: Random.natural(35, 55) + '岁',
  address: Random.province(),
  experience: Random.natural(1, 8) + '年经验',
  // 是否关注 0未关注  1关注
  attention: Random.natural(0, 1),
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
    profession: text,
    title: '品质家政服务领导者',
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

// 服务人员个人信息
const userInfo = {
  // 随机生成一个常见的中文姓名
  name: '李月娥',
  // 随机地址
  address: Random.city(true),
  // 生成随机的 图片
  image: Random.image('200x100', '#fb0a2a'),
  // 手机号码
  mobile: mockjs.getMobile(),
  // 随机生成0或1
  sex: 1
}

// 家服公司智能匹配列表
const companyList = [{
  title: '区县',
  list: ['市辖区', '芙蓉区',
    '天心区',
    '岳麓区',
    '开福区',
    '雨花区',
    '望城区',
    '长沙县',
    '浏阳市',
    '宁乡市',
    '荷塘区',
    '芦淞区',
    '石峰区',
    '天元区',
    '渌口区']
}, {
  title: '职业类型',
  list: ['全部', '保姆',
    '月嫂',
    '产康师',
    '保洁/清',
    '早教/托',
    '养老',
    '陪护',
    '育婴师',
    '保洁',
    '家庭管理']
}, {
  title: '信用等级',
  list: ['A级', 'AA级',
    'AAA级',
    'AAAA级'
  ]
}, {
  title: '已认证客户服务数',
  list: ['大于100', '50-100',
    '30-50',
    '小于30人'
  ]
},
{
  title: '公司规模',
  list: ['500人以上', '50-300',
    '200人以内'
  ]
}]
// 家服人员智能匹配列表
const staffList = [{
  title: '职业类型',
  list: ['全部', '保姆',
    '月嫂',
    '产康师',
    '保洁/清',
    '早教/托',
    '养老',
    '陪护',
    '育婴师',
    '保洁',
    '家庭管理']

},
{
  title: '学历',
  list: ['不限', '小学',
    '初中',
    '中专',
    '职高',
    '高中',
    '大专',
    '本科'
  ]

},
{
  title: '民族',
  list: ['不限', '汉族',
    '苗族',
    '回族',
    '藏族',
    '维吾尔族',
    '彝族',
    '壮族'
  ]
},
{
  title: '婚姻状况',
  list: ['不限', '未婚',
    '已婚',
    '离异',
    '丧偶'
  ]
},
{
  title: '生肖',
  list: ['不限', '鼠',
    '牛',
    '猪',
    '兔',
    '虎',
    '龙']

},
{
  title: '工作年限',
  list: ['不限', '1年',
    '2年', '3年', '4年', '5年', '6年', '7年', '8年']

},
{
  title: '主要技能',
  list: ['做饭', '催乳',
    '产后修复',
    ' 月子餐',
    '家庭保洁',
    '育婴',
    '小儿推拿']

}
]

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
  intended: [{ occupation_name: '月嫂', active: false }, { occupation_name: '育婴师', active: false }, { occupation_name: '保洁/清洗', active: false }, { occupation_name: '保姆', active: false }, { occupation_name: '早教/托', active: false }, { occupation_name: '养老/陪护', active: false }, { occupation_name: '家装/搬家', active: false }, { occupation_name: '产康师', active: false }],
  certificate: ['月嫂', '育婴师', '小儿推拿', '保姆', '保育员证'],
  NativePlace: '唐朝', // 籍贯
  CurrentAddress: '北京房区', // 现居地址
  company: '请选择', // 意向家政公司
  remarks: '123888' // 备注信息
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
  'http://localhost:8080/banner|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: bannerPic
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
    } else {
      matronInfo = matronInfo4
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
  },
  // 获取家服公司智能匹配列表
  'http://localhost:8080/company|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: companyList
    }
  },
  // 获取家服人员智能匹配列表
  'http://localhost:8080/staff|get': options => {
    return {
      status: 200,
      msg: '获取信息成功',
      data: staffList
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
