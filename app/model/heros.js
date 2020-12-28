module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const HeroSchema = new Schema({
    ename: {
      type: Number
    },
    cname: { type: String },
    title: { type: String },
    new_type: {
      type: Number
    },
    hero_type: {
      type: Number
    },
    hero_type2: {
      type: Number
    },
    skin_name: { type: String }
  })

  return mongoose.model('Hero', HeroSchema)
}
