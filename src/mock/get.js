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
  }
}
