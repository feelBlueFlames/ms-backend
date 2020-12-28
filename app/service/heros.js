const { Service } = require('egg')
class HerosService extends Service {
  async getAllHeros(heros = {}) {
    console.log(heros)
    const { ctx } = this
    const result = await ctx.model.Heros.find(heros)
    return result
  }
  async addHeros(heros) {
    const { ctx } = this

    return ctx.model.Heros.insertMany()
  }
}

module.exports = HerosService
