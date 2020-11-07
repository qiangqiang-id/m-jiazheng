module.exports = {
  plugins: {
    //  因为vue-cli默认开启了autoprefixer 所以保存时就会提示警告
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // rootVlaue 的值应设置成设计稿的十分之一，如果设计稿是750px 这里就需要设置 75，但是由于vant是按照375来写的 就是设置成37.5,。如果想要vant按照37.5   自己的样式按照75  rootValue接受一个函数，通过函数可以设置
      rootValue ({ file }) {
        console.log(file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置需要转换的css属性
      // '*'表示全部
      propList: ['*']
      // 配置不需要转换的资源文件
      // exclude: 'markdown'
    }
  }
}
