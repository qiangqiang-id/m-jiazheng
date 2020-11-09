import MockJS from 'mockjs'

// 设置mockJS配置参数
MockJS.setup({
  timeout: 400
})
// 遍历文件夹，收集js文件
// 第一个参数代表目录.代表当前目录
// 第二个参数代表是否遍历子目录
// 第三个参数代表需要遍历的文件名称，支持正则表达式
const files = require.context('.', true, /\.js$/)
const currentArray = []
// 返回值 是webpackcontext，通过files.keys() 方法可以得到对应的文件名称,例如：你该目录下有 index.js get.js post.js,那么你通过files.keys() 得到的数据是：['./index.js','./get.js','./post.js']
files.keys().forEach(key => {
  if (key === './index.js') return
  // 通过default属性来获取到该文件通过 exports default 导出的对象
  currentArray.push(files(key).default)
})

currentArray.forEach(item => {
  // 把对象转成二维数组，拿到里面的key和value
  for (const [path, target] of Object.entries(item)) {
    // path 就是对应的路径和请求方式，中间用|隔开
    const propocal = path.split('|')
    MockJS.mock(new RegExp(`^${propocal[0]}`), propocal[1], target)
  }
})
