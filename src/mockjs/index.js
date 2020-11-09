import MockJs from 'mockjs'

MockJs.setup({
  timeout: 400
})

// 第一个参数代表目录 . 代表当前目录
// 第二个参数代表是否遍历子目录
// 第三个参数代表需要遍历的文件名称，支持正则表达式
// 返回值 是webpackcontext，通过files.keys() 方法可以得到对应的文件名称,例如：你该目录下有 index.js get.js post.js,那么你通过files.keys() 得到的数据是：['./index.js','./get.js','./post.js']
const files = require.context('.', true, /\.js$/)

// 定义数组
const configArray = []
files.keys().forEach(key => {
  if (key === './index.js') return
  // 每次遍历把得到的对象添加到数组中
  configArray.push(files[key].default)
})

configArray.forEach(item => {
  // 把对象转成二维数组，拿到里面的key和value
  for (const [path, target] of Object.entries(item)) {
    // path 就是对应的路径和请求方式，中间用|隔开
    // target 就是处理函数
    // 切割一下 path
    const protocal = path.split('|')
    // 利用Mock来进行模拟
    MockJs.mock(new RegExp(`^${protocal[0]}`), protocal[1], target)
  }
})
