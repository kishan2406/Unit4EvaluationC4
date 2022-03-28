const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName : {type:String, required: true},
        lastName : {type:String, required: false},
        email : {type:String, required: true},
        password : {type: Number, required: true},
        Todos_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }

    }, {
         versionKey: false,

         timestamps: true,
    }
);

const User = mongoose.model("user", userSchema)

module.exports = User