const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  breed: String,
  lifeExpectancy: String,
  weight: String,
  levelCute: String
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog