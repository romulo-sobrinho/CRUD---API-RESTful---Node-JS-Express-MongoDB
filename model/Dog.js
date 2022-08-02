const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  breed: {type: String, require: true, unique: true},
  lifeExpectancy: {type: String, require: true},
  weight: {type: String, require: true},
  levelCute: {type: String, require: true}
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog