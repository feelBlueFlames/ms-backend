const { Service } = require('egg')
class UserService extends Service {
  async addUser(user) {
    const { ctx } = this
    return ctx.model.User.create(user)
  }
  async findUser(user) {
    const { ctx } = this
    return ctx.model.User.findOne(user)
  }

  async login({ username, password }) {
    const { ctx, service } = this
    const userInfo = await service.user.findUser({ username })
    if (!userInfo) ctx.throw(404, 'User Is Not Found!')
    const checked = ctx.compare(password, userInfo.password)
    if (!checked) ctx.throw(404, 'User Password Is Wrong!')
    return {
      userId: userInfo._id,
      phone: userInfo.phone,
      username: userInfo.username,
      token: await service.assessToken.createToken(userInfo._id)
    }
  }
}
module.exports = UserService
