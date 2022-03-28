const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title : {type:String, required: true},
        User_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "todo",
            required: true}    

    }, {
         versionKey: false,

         timestamps: true,
    }
);

const Todos = mongoose.model("todo", todoSchema)

module.exports = Todos