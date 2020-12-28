module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const HeroSchema = new Schema({
    item_id: {
      type: Number
    },
    item_name: { type: String },
    item_type: { type: Number },
    price: {
      type: Number
    },
    total_price: {
      type: Number
    },
    des1: {
      type: String
    },
  })

  return mongoose.model('Equip', HeroSchema)
}
