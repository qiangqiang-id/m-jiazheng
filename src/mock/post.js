const data = {
  name: '李月娥',
  sex: '女',
  img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1639829983,1524205132&fm=26&gp=0.jpg'
}
export default {
  'http://localhost:8080/login|post': options => {
    return {
      status: 200,
      msg: '登录成功',
      phone: JSON.parse(options.body).mobile,
      data
    }
  }
}
