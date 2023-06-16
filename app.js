const express = require('express')
const app = express()
const todoRouter = require('./routes/todo')
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/todo', todoRouter)

module.exports = app
