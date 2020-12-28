const moment = require('moment')
exports.formatDate = time => moment(time).format('YYYY-MM-DD HH:mm:ss')
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 1,
    data: res,
    msg
  }
  ctx.status = 200
}
