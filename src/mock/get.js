import mockjs from 'mockjs'

var Random = mockjs.Random
const type = []
for (var i = 0; i < 8; i++) {
  type.push({
    id: i,
    text: '月嫂' + i

  })
}
// 服务人员基本信息
const datas = []
var k = 1
for (let i = 0; i < k; i++) {
  datas.push({
    id: k,
    name: Random.cname(),
    // 工作经验
    experience: Random.natural(1, 8),
    // 随机地址
    address: Random.city(true),
    price: Math.ceil(Math.random() * 10) * 1000,
    // 服务几户
    service: Random.natural(20, 200),
    // 评价
    evaluate: Random.natural(1, 2000),
    // 标签
    label: [Random.natural(1, 8) + '星育婴师', Random.natural(1, 8) + '年工作经验', Random.ctitle(3, 5)]
  })
}
// 家服公司基本信息
const companyMsg = []
for (let i = 0; i < 3; i++) {
  companyMsg.push({
    id: i,
    shopAddress: Random.city(true) + ' 东方红县', // 随机生成地址
    companyName: Random.city(true) + ' 家政有限公司', // 公司名
    evaluate: ['服务好', '客户至上', '巴拉巴拉'], // 评价
    distance: Random.float(5, 30, 1, 2) + 'km'// 距离
  })
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
  }

}
