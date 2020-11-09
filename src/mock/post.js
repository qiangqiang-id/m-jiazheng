const data = {
  name: '李月娥',
  sex: '女',
  img: 'https://beijing.198526.com/baomuimages/images/198526-5bd71b8c0d355.jpg'
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
