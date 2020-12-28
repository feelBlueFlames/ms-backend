module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      description: '用户名',
      example: 'flames',
      format: /^\w+$/
    },
    password: {
      type: String,
      required: true,
      description: '密码',
      example: '123456'
    },
    phone: String
  })
  return mongoose.model('User', UserSchema)
}
