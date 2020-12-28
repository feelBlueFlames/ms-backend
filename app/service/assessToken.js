const { Service } = require('egg')
class AssessTokenService extends Service {
  async createToken(_id) {
    const {
      ctx: { app }
    } = this
    return app.jwt.sign(
      { data: { _id }, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      app.config.jwt.secret
    )
  }
}
module.exports = AssessTokenService
