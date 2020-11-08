const type = []
for (var i = 0; i < 8; i++) {
  type.push({
    id: i,
    text: '月嫂' + i
  })
}
export default {
  'http://localhost:8080/type|get': options => {
    return {
      status: 200,
      type: type
    }
  },
  'http://localhost:8080/pic|get': options => {
    return {
      status: 200,
      data: {
        picPath: ['@/assets/images/banner1', '@/assets/images/banner2', '@/assets/images/banner3', '@/assets/images/banner5', '@/assets/images/banner5']
      }
    }
  }
}
