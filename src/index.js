const express = require("express")

const userController = require("./controllers/user.controllers")
const todoController = require("./controllers/todo.controllers")

const app  = express()

app.use(express.json())

app.use("/User", userController)
app.user("/Todos", todoController)


module.exports = app