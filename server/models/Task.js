const { Schema, model, models } = require('mongoose')

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true,
    maxlength: [40, 'Title must be less than 40 characters']
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [200, 'Description must be less than 200 characters']
  }
}, {
  timestamps: true,
  versionKey: false
})

const Task = models.Task || model('Task', taskSchema)

module.exports = {
  Task
}
