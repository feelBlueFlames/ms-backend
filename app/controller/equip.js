'use strict'

const Controller = require('egg').Controller

/**
 * @Controller 英雄装备
 */
class HerosController extends Controller {
  /**
   * @Summary 查询装备
   * @Description 查询装备
   * @Router POST /equip/queryEquips
   * @Response 200 baseResponse ok
   */
  async queryEquips() {
    const { ctx, service } = this
    const res = await service.equip.getAllEquips(ctx.request.body)
    ctx.helper.success({
      ctx,
      res
    })
  }
  /**
   * @Summary 初始化装备
   * @Description 初始化装备
   * @Router GET /equip/addHeros
   * @Response 200 baseResponse ok
   */
  async initEquip() {
    const { ctx, service } = this
    service.equip.initEquip()
  }
}

module.exports = HerosController
