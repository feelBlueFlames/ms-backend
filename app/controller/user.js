'use strict'

const Controller = require('egg').Controller

/**
 * @Controller 用户
 */
class UserController extends Controller {
  /**
   * @Summary 添加用户
   * @Description 添加用户
   * @Router POST /user/addUser
   * @Response 200 baseResponse ok
   */
  async addUser() {
    const { ctx, service, body } = this
    const res = await service.user.addUser()
    ctx.helper.success({
      ctx,
      res
    })
  }
  /**
   * @Summary 用户登录
   * @Description 用户登录
   * @Router POST /user/login
   * @Request body userLoginRequest
   * @Response 200 baseResponse ok
   */
  async login() {
    const { ctx, service } = this
    const payload = ctx.request.body
    const res = await service.user.login(payload)
    ctx.body = {
      currentAuthority: 'admin',
      status: 'ok',
      type: 'account'
    }
    /*  ctx.helper.success({
      ctx,
      res
    }) */
  }
  /**
   * @Summary 当前用户
   * @Description 当前用户
   * @Router get /user/currentUser
   * @Response 200 baseResponse ok
   */
  async currentUser() {
    const { ctx, service } = this
    const payload = ctx.request.body
    const currentUser = this.ctx.state.user
    console.log(currentUser)
    const res = await service.user.findUser({
      
    })
    /*    ctx.helper.success({
      ctx,
      res
    }) */
    ctx.body = {
      name: 'Serati Ma',
      avatar:
        'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁集团－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        { key: '0', label: '很有想法的' },
        { key: '1', label: '专注设计' },
        { key: '2', label: '辣~' },
        { key: '3', label: '大长腿' },
        { key: '4', label: '川妹子' },
        { key: '5', label: '海纳百川' }
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: { label: '浙江省', key: '330000' },
        city: { label: '杭州市', key: '330100' }
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888'
    }
  }
}
module.exports = UserController
