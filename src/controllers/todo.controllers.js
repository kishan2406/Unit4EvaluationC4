
const express = require("express")

const router = express.Router();
app.use(express.json())

const todos = requier("../models/todo.models")

router.get("/todos", authenticate, async(req, res) => {

    try{
         const Todos = await todos.find()

    }catch(err){
        return res.status(401).send({todos})
    }
})

router.post("/todos/:id",async(req, res) => {

    try{
         const Todos = await todos.create(req,res)

    }catch(err){
        return res.status(401).send({todos})
    }
})


router.patch("/todos/:id",async(req, res) => {

    try{
         const Todos = await todos.find()

    }catch(err){
        return res.status(401).send({todos})
    }
})


router.delete("/todos/:id", async(req, res) => {

    try{
         const Todos = await todos.find()

    }catch(err){
        return res.status(401).send({todos})
    }
})
module.exports = router;