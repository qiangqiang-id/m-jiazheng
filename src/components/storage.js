// 封装本地存储操作模块
// 存储数据
export const setItem = (key, value) => {
  // console.log(value)
  // 将数组或者对象类型的数据转换成JSON格式的字符串,然后进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}
// 获取数据
export const getItem = key => {
  const data = window.sessionStorage.getItem(key)
  try {
    // 判断一个字符串是否是JSON格式的字符串直接可以JSON.parse来转换一下如果成功就是JSON格式的字符串
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 删除数据
export const removeItem = key => {
  window.sessionStorage.removeItem(key)
}
