const ToDoList = require('../models/ToDoList')
const { Router } = require('express')
const todoRouter = Router()

console.log(222)
const createToDo = async (req, res, next) => {
  console.log(1111)
  const { todo, isDone } = req.body
  try {
    const newTodo = await ToDoList.create({
      todo: todo
    })
    res.json({ data: newTodo })
    console.log('created')
    console.log(JSON.stringify(newTodo))
  } catch (e) {
    next(e)
  }
}

const getTodo = async (req, res, next) => {
  try {
    const todos = await ToDoList.find({})
    res.json({ todos })
  } catch (e) {
    next(e)
  }
}

const deleteTodo = async (req, res, next) => {
  const { id } = req.params
  console.log('deleted1')
  try {
    const todos = await ToDoList.deleteOne({ _id: id })

    res.json({ todos })
    console.log('deleted2')
  } catch (e) {
    console.log(e)
  }
}

const updateDone = async (req, res, next) => {
  const { id } = req.params
  console.log(id)
  try {
    await ToDoList.updateMany(
      {
        _id: id
      },
      { $set: { isDone: true } }
    )
    res.send(204)
  } catch (error) {
    console.log(error)
  }
}

const updateToDo = async (req, res, next) => {
  const { id } = req.params
  console.log(1115551)
  try {
    const updatedTodo = await ToDoList.updateMany(
      {
        _id: id
      },
      { $set: { todo: req.body.todo } }
    )
    console.log(JSON.stringify(updatedTodo))
    res.json('edited')
  } catch (error) {
    console.log(error)
  }
  
}

todoRouter.post('/', createToDo)
todoRouter.get('/', getTodo)
todoRouter.delete('/:id', deleteTodo)
todoRouter.put('/done/:id', updateDone)
todoRouter.put('/:id', updateToDo)

module.exports = todoRouter
