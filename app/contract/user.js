module.exports = {
  userLoginRequest: {
    username: {
      type: 'string',
      required: true,
      description: '用户名',
      example: 'flames',
      format: /^\w+$/
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '123456'
    }
  }
}
