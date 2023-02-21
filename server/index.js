const express = require('express')
const cors = require('cors')
const fs = require('fs')
const db = require('./db/tasks.json')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

// Endpoint para obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.send(db)
})

// Enpoint para crear nueva tarea
app.post('/tasks', (req, res) => {
  db.push({ id: db.length + 1, ...req.body })
  fs.writeFile('./db/tasks.json', JSON.stringify(db), err => {
    if (err) throw err
  })
  res.send('Nueva tarea creada')
})

// Enpoint para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const params = parseInt(req.params.id)
  const taskFilter = db.filter(task => task.id !== params)

  fs.writeFile('./db/tasks.json', JSON.stringify(taskFilter), err => {
    if (err) throw err
  })

  res.send('Tarea Eliminada correctamente')
})

// Endpoint para modificar una tarea

app.put('/tasks/:id', (req, res) => {
  const newData = req.body
  const params = parseInt(req.params.id)
  const findTask = db.find((task) => task.id === params)

  if (!findTask) {
    res.status(404).json({
      message: 'Product not found'
    })
  }

  const newdb = db.map(task => task.id === params
    ? { ...task, ...newData }
    : task)

    fs.writeFile('./db/tasks.json', JSON.stringify(newdb), err => {
      if (err) throw err
    })

  res.send('Tarea Modificada correctamente')
})


app.listen(port)
console.log(`server on port: ${app.get('port')}`)