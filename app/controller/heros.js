'use strict'

const Controller = require('egg').Controller

/**
 * @Controller 英雄
 */
class HerosController extends Controller {
  /**
   * @Summary 获取全部英雄
   * @Description 获取全部英雄
   * @Router POST /heros/getAllHeros
   * @Response 200 baseResponse ok
   */
  async getAllHeros() {
    const { ctx, service } = this
    const res = await service.heros.getAllHeros(ctx.request.body)
    ctx.helper.success({
      ctx,
      res
    })
  }
  /**
   * @Summary 新增英雄
   * @Description 新增英雄
   * @Router GET /heros/addHeros
   * @Response 200 baseResponse ok
   */
  async addHeros() {
    const { ctx, service } = this
    service.heros.addHeros()
  }
}

module.exports = HerosController
