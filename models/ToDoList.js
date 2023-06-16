const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoListSchema = new Schema({
  todo: {
    type: String,
    required: true,
    trim: true
  },
  isDone: {
    type: Boolean,
    required: true,
    default:false
  }
})

module.exports = mongoose.model('ToDoList', ToDoListSchema)
