const express = require('express')
const cors = require('cors')
const fs = require('fs')
// Database Mongo
const { dbConnect } = require('./db/db')
const { Task } = require('./models/Task')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

dbConnect()

// Endpoint para obtener todas las tareas
 app.get('/tasks', async (req, res) => {
  const tasks = await Task.find()
  res.status(200).json(tasks)
})

// Enpoint para crear nueva tarea
app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body)
  const savedTask = await newTask.save()
  res.status(201).json(savedTask)
})

// Enpoint para eliminar una tarea
app.delete('/tasks/:id', async (req, res) => {
  try {
    const params = req.params.id
    const deleteTask = await Task.findByIdAndDelete(params)
      if(!deleteTask) return res.status(404).json({msg : "Task not found"})
    
      return res.status(204).json({msg: "Tarea eliminada Correctamente"})
  } catch (error) {
    
    return res.status(400).json({msg: error.message})
  }
})

// Endpoint para modificar una tarea

app.put('/tasks/:id', async (req, res) => {
  try {
    const newData = req.body
    const params = req.params.id
    
    const updateTask = await Task.findByIdAndUpdate(params, newData)
    if (!updateTask) return res.status(404).json({msg : "Task not found"})
  
    return res.status(204).json({msg: 'Tarea actualizada correctamente'})
    
  } catch (error) {
    
    return res.status(400).json({msg: error.message})

  }

})


app.listen(port)
console.log(`server on port: ${port}`)